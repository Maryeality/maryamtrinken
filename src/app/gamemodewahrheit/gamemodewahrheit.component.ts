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
  imports: [RouterOutlet, CommonModule],
  templateUrl: './gamemodewahrheit.component.html',
  styleUrl: './gamemodewahrheit.component.scss',
})
export class GamemodewahrheitComponent implements OnInit {
  private allQuestions = new BehaviorSubject<Frage[]>([]);
  private usedQuestions: Frage[] = [];
  frage$: Observable<Frage[]> = this.allQuestions.asObservable();
  currentQuestion: Frage | null = null;
  gameOver = false;
  isNextQuestionButtonDisabled = true;

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
      {
        button: 'SoftAllg',
        art: 'Frage',
        category: 'kategorieAllg',
        intensity: 'soft',
      },
      {
        button: 'MiddleAllg',
        art: 'Frage',
        category: 'kategorieAllg',
        intensity: 'middle',
      },
      {
        button: 'HardAllg',
        art: 'Frage',
        category: 'kategorieAllg',
        intensity: 'hard',
      },
      {
        button: 'SoftAllgAufg',
        art: 'Aufgabe',
        category: 'kategorieAllg',
        intensity: 'soft',
      },
      {
        button: 'MiddleAllgAufg',
        art: 'Aufgabe',
        category: 'kategorieAllg',
        intensity: 'middle',
      },
      {
        button: 'HardAllgAufg',
        art: 'Aufgabe',
        category: 'kategorieAllg',
        intensity: 'hard',
      },
      {
        button: 'SoftSex',
        art: 'Frage',
        category: 'kategorieSex',
        intensity: 'soft',
      },
      {
        button: 'MiddleSex',
        art: 'Frage',
        category: 'kategorieSex',
        intensity: 'middle',
      },
      {
        button: 'HardSex',
        art: 'Frage',
        category: 'kategorieSex',
        intensity: 'hard',
      },
      {
        button: 'SoftSexAufg',
        art: 'Aufgabe',
        category: 'kategorieSex',
        intensity: 'soft',
      },
      {
        button: 'MiddleSexAufg',
        art: 'Aufgabe',
        category: 'kategorieSex',
        intensity: 'middle',
      },
      {
        button: 'HardSexAufg',
        art: 'Aufgabe',
        category: 'kategorieSex',
        intensity: 'hard',
      },
      {
        button: 'SoftDark',
        art: 'Frage',
        category: 'kategorieDark',
        intensity: 'soft',
      },
      {
        button: 'MiddleDark',
        art: 'Frage',
        category: 'kategorieDark',
        intensity: 'middle',
      },
      {
        button: 'HardDark',
        art: 'Frage',
        category: 'kategorieDark',
        intensity: 'hard',
      },
      {
        button: 'SoftDarkAufg',
        art: 'Aufgabe',
        category: 'kategorieDark',
        intensity: 'soft',
      },
      {
        button: 'MiddleDarkAufg',
        art: 'Aufgabe',
        category: 'kategorieDark',
        intensity: 'middle',
      },
      {
        button: 'HardDarkAufg',
        art: 'Aufgabe',
        category: 'kategorieDark',
        intensity: 'hard',
      },
    ];

    buttonMappings.forEach(({ button, art, category, intensity }) => {
      if (this.buttonsList.includes(button)) {
        const q = query(
          this.frageCollection,
          where('art', '==', art),
          where(category, '==', true),
          where('intensitaet', '==', intensity)
        );
        collectionData<Frage>(q).subscribe((data: Frage[]) => {
          this.addQuestions(data);

          if (!this.currentQuestion && this.allQuestions.value.length > 0) {
            this.currentQuestion = this.allQuestions.value[0];
          }
        });
      }
    });
  }

  private addQuestions(newQuestions: Frage[]): void {
    //newQuestions ist data
    this.allQuestions.next([...this.allQuestions.value, ...newQuestions]);
  }

  onNextQuestionClick() {
    console.log('Nächste Frage geklickt');
    if (!this.currentQuestion && this.allQuestions.value.length === 0) {
      console.log('Alle Alle');
      this.gameOver = true;
      return;
    }

    if (this.currentQuestion) {
      this.usedQuestions.push(this.currentQuestion);
    }

    const remainingQuestions = this.allQuestions.value.filter(
      (q) => !this.usedQuestions.includes(q)
    );

    if (remainingQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
      this.currentQuestion = remainingQuestions[randomIndex];
      this.allQuestions.next(remainingQuestions);
    } else {
      this.currentQuestion = null;
      this.gameOver = true;
    }

    this.isNextQuestionButtonDisabled = !this.isNextQuestionButtonDisabled;
    setTimeout(() => {
      this.isNextQuestionButtonDisabled = true;
    }, 50);

    console.log('Nächste Frage', this.currentQuestion);
  }
}
