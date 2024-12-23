import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  and,
  collection,
  collectionData,
  CollectionReference,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule, NgForOf } from '@angular/common';
import { ButtonListService } from '../button-list.service';

interface Frage {
  inhalt: string;
  art: string;
  intensitaet: string;
}

@Component({
  selector: 'app-gamemodewahrheit',
  standalone: true,
  imports: [RouterOutlet, NgForOf, CommonModule],
  templateUrl: './gamemodewahrheit.component.html',
  styleUrl: './gamemodewahrheit.component.scss',
})
export class GamemodewahrheitComponent implements OnInit {
  qus: [] = [];
  frage$: Observable<Frage[]>;
  firestore: Firestore = inject(Firestore);
  frageCollection: CollectionReference;
  buttonsList: string[] = [];

  constructor(private buttonListService: ButtonListService) {
    this.frageCollection = collection(this.firestore, 'fragen');
    this.frage$ = collectionData<Frage>(this.frageCollection);
  }

  ngOnInit(): void {
    this.buttonsList = this.buttonListService.getButtonsList();
    console.log('Button-Liste:', this.buttonsList);
    if (this.buttonsList.includes('SanftAllg')) {
      const q = query(
        this.frageCollection,
        where('kategorieAllg', '==', 'true')
      );
      this.frage$ = collectionData<Frage>(q);
      this.frage$.subscribe((data) => {
        console.log('Gefilterte Daten:', data);
      });
    } else {
      console.log('Keine passende Frage');
    }
  }
}
