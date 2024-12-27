import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ButtonListService {
  private buttonsList: string[] = [];

  setButtonsList(list: string[]): void {
    this.buttonsList = list;
  }

  getButtonsList(): string[] {
    return this.buttonsList;
  }
}
