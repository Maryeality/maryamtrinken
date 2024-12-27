import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ButtonListService } from '../button-list.service';

@Component({
  selector: 'app-gamemodeselection',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, CommonModule],
  templateUrl: './gamemodeselection.component.html',
  styleUrl: './gamemodeselection.component.scss',
})
export class GamemodeselectionComponent {
  isSanftAllgButtonDisabled = true;
  isMiddleAllgButtonDisabled = true;
  isHardAllgButtonDisabled = true;
  isSanftSexButtonDisabled = true;
  isMiddleSexButtonDisabled = true;
  isHardSexButtonDisabled = true;
  isSanftDarkButtonDisabled = true;
  isMiddleDarkButtonDisabled = true;
  isHardDarkButtonDisabled = true;
  isGamestartButton = true;

  buttonsList: string[] = [];

  toggleButtonSanftAllg() {
    this.isSanftAllgButtonDisabled = !this.isSanftAllgButtonDisabled;
  }
  toggleButtonMiddleAllg() {
    this.isMiddleAllgButtonDisabled = !this.isMiddleAllgButtonDisabled;
  }
  toggleButtonHardAllg() {
    this.isHardAllgButtonDisabled = !this.isHardAllgButtonDisabled;
  }
  toggleButtonSanftSex() {
    this.isSanftSexButtonDisabled = !this.isSanftSexButtonDisabled;
  }
  toggleButtonMiddleSex() {
    this.isMiddleSexButtonDisabled = !this.isMiddleSexButtonDisabled;
  }
  toggleButtonHardSex() {
    this.isHardSexButtonDisabled = !this.isHardSexButtonDisabled;
  }
  toggleButtonSanftDark() {
    this.isSanftDarkButtonDisabled = !this.isSanftDarkButtonDisabled;
  }
  toggleButtonMiddleDark() {
    this.isMiddleDarkButtonDisabled = !this.isMiddleDarkButtonDisabled;
  }
  toggleButtonHardDark() {
    this.isHardDarkButtonDisabled = !this.isHardDarkButtonDisabled;
  }

  constructor(
    private router: Router,
    private buttonListService: ButtonListService
  ) {}

  onGamestartClick() {
    console.log('Button wurde geklickt');
    this.buttonsList = [];
    if (!this.isSanftAllgButtonDisabled) this.buttonsList.push('SanftAllg');
    if (!this.isMiddleAllgButtonDisabled) this.buttonsList.push('MiddleAllg');
    if (!this.isHardAllgButtonDisabled) this.buttonsList.push('HardAllg');
    if (!this.isSanftSexButtonDisabled) this.buttonsList.push('SanftSex');
    if (!this.isMiddleSexButtonDisabled) this.buttonsList.push('MiddleSex');
    if (!this.isHardSexButtonDisabled) this.buttonsList.push('HardSex');
    if (!this.isSanftDarkButtonDisabled) this.buttonsList.push('SanftDark');
    if (!this.isMiddleDarkButtonDisabled) this.buttonsList.push('MiddleDark');
    if (!this.isHardDarkButtonDisabled) this.buttonsList.push('hardDark');
    //console.log('Nicht deaktivierte Buttons:', this.buttonsList);
    this.buttonListService.setButtonsList(this.buttonsList);
    this.router.navigate(['/wahrheit']);
  }
}
