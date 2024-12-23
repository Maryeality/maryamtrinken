import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ButtonListService {
  private buttonsList: string[] = [];

  // Methode zum Setzen der Button-Liste
  setButtonsList(list: string[]): void {
    this.buttonsList = list;
  }

  // Methode zum Abrufen der Button-Liste
  getButtonsList(): string[] {
    return this.buttonsList;
  }
}
