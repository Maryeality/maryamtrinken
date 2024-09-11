import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  collection,
  collectionData,
  CollectionReference,
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule, NgForOf } from '@angular/common';

interface Frage {
  inhalt: string;
}

@Component({
  selector: 'app-gamemodewahrheit',
  standalone: true,
  imports: [RouterOutlet, NgForOf, CommonModule],
  templateUrl: './gamemodewahrheit.component.html',
  styleUrl: './gamemodewahrheit.component.scss',
})
export class GamemodewahrheitComponent {
  frage$: Observable<Frage[]>;
  firestore: Firestore = inject(Firestore);
  frageCollection: CollectionReference;

  constructor() {
    this.frageCollection = collection(this.firestore, 'fragen');
    this.frage$ = collectionData<Frage>(this.frageCollection);
  }
}
