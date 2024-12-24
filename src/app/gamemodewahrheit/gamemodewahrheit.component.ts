import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  collection,
  collectionData,
  CollectionReference,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommonModule, NgForOf } from '@angular/common';
import { ButtonListService } from '../button-list.service';

interface Frage {
  inhalt: string;
  art: string;
  intensitaet: string;
  kategorieAllg: boolean;
  kategorieDark: boolean;
  kategorieSex: boolean;
}

@Component({
  selector: 'app-gamemodewahrheit',
  standalone: true,
  imports: [RouterOutlet, NgForOf, CommonModule],
  templateUrl: './gamemodewahrheit.component.html',
  styleUrl: './gamemodewahrheit.component.scss',
})
export class GamemodewahrheitComponent implements OnInit {
  private allQuestions = new BehaviorSubject<Frage[]>([]);
  private usedQuestions: Frage[] = []; // Fragen, die bereits gezeigt wurden
  frage$: Observable<Frage[]> = this.allQuestions.asObservable();
  currentQuestion: Frage | null = null; // Aktuelle Frage
  gameOver = false; // Status für Spielende

  firestore: Firestore = inject(Firestore);
  frageCollection: CollectionReference;
  buttonsList: string[] = [];

  constructor(private buttonListService: ButtonListService) {
    this.frageCollection = collection(this.firestore, 'fragen');
  }

  ngOnInit(): void {
    this.buttonsList = this.buttonListService.getButtonsList();
    console.log('Button-Liste:', this.buttonsList);

    const buttonMappings = [
      { button: 'SanftAllg', category: 'kategorieAllg', intensity: 'sanft' },
      { button: 'MittelAllg', category: 'kategorieAllg', intensity: 'mittel' },
      { button: 'HardAllg', category: 'kategorieAllg', intensity: 'hard' },
      { button: 'SanftSex', category: 'kategorieSex', intensity: 'sanft' },
      { button: 'MittelSex', category: 'kategorieSex', intensity: 'mittel' },
      { button: 'HardSex', category: 'kategorieSex', intensity: 'hard' },
      { button: 'SanftDark', category: 'kategorieDark', intensity: 'sanft' },
      { button: 'MittelDark', category: 'kategorieDark', intensity: 'mittel' },
      { button: 'HardDark', category: 'kategorieDark', intensity: 'hard' },
    ];

    buttonMappings.forEach(({ button, category, intensity }) => {
      if (this.buttonsList.includes(button)) {
        const q = query(
          this.frageCollection,
          where(category, '==', true),
          where('intensitaet', '==', intensity)
        );
        collectionData<Frage>(q).subscribe((data: Frage[]) => {
          this.addQuestions(data);
        });
      }
    });
  }

  private addQuestions(newQuestions: Frage[]): void {
    this.allQuestions.next([...this.allQuestions.value, ...newQuestions]);
  }

  getRandomQuestion(): void {
    const remainingQuestions = this.allQuestions.value.filter(
      (q) => !this.usedQuestions.includes(q)
    );

    if (remainingQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
      this.currentQuestion = remainingQuestions[randomIndex];
      this.usedQuestions.push(this.currentQuestion); // Markiere die Frage als verwendet
    } else {
      this.gameOver = true; // Keine Fragen mehr verfügbar
      this.currentQuestion = null;
    }
  }
}
