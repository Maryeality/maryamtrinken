import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  collection,
  collectionData,
  CollectionReference,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule, NgForOf } from '@angular/common';

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
export class GamemodewahrheitComponent {
  qus: [] = [];
  frage$: Observable<Frage[]>;
  firestore: Firestore = inject(Firestore);
  frageCollection: CollectionReference;

  constructor() {
    this.frageCollection = collection(this.firestore, 'fragen');
    this.frage$ = collectionData<Frage>(this.frageCollection);
    const q = query(this.frageCollection, where('kategorieAllg', '==', 'true'));
  }
  // abfrage() {
  // if (frage.kategorieAllg == true) {

  //}
}
