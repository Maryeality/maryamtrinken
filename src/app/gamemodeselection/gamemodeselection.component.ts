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
  isSoftAllgButtonDisabled = true;
  isMiddleAllgButtonDisabled = true;
  isHardAllgButtonDisabled = true;
  isSoftAllgAufgButtonDisabled = true;
  isMiddleAllgAufgButtonDisabled = true;
  isHardAllgAufgButtonDisabled = true;
  isSoftSexButtonDisabled = true;
  isMiddleSexButtonDisabled = true;
  isHardSexButtonDisabled = true;
  isSoftSexAufgButtonDisabled = true;
  isMiddleSexAufgButtonDisabled = true;
  isHardSexAufgButtonDisabled = true;
  isSoftDarkButtonDisabled = true;
  isMiddleDarkButtonDisabled = true;
  isHardDarkButtonDisabled = true;
  isSoftDarkAufgButtonDisabled = true;
  isMiddleDarkAufgButtonDisabled = true;
  isHardDarkAufgButtonDisabled = true;
  isGamestartButton = true;

  buttonsList: string[] = [];

  toggleButtonSoftAllg() {
    this.isSoftAllgButtonDisabled = !this.isSoftAllgButtonDisabled;
  }
  toggleButtonMiddleAllg() {
    this.isMiddleAllgButtonDisabled = !this.isMiddleAllgButtonDisabled;
  }
  toggleButtonHardAllg() {
    this.isHardAllgButtonDisabled = !this.isHardAllgButtonDisabled;
  }
  toggleButtonSoftAllgAufg() {
    this.isSoftAllgAufgButtonDisabled = !this.isSoftAllgAufgButtonDisabled;
  }
  toggleButtonMiddleAllgAufg() {
    this.isMiddleAllgAufgButtonDisabled = !this.isMiddleAllgAufgButtonDisabled;
  }
  toggleButtonHardAllgAufg() {
    this.isHardAllgAufgButtonDisabled = !this.isHardAllgAufgButtonDisabled;
  }
  toggleButtonSoftSex() {
    this.isSoftSexButtonDisabled = !this.isSoftSexButtonDisabled;
  }
  toggleButtonMiddleSex() {
    this.isMiddleSexButtonDisabled = !this.isMiddleSexButtonDisabled;
  }
  toggleButtonHardSex() {
    this.isHardSexButtonDisabled = !this.isHardSexButtonDisabled;
  }
  toggleButtonSoftSexAufg() {
    this.isSoftSexAufgButtonDisabled = !this.isSoftSexAufgButtonDisabled;
  }
  toggleButtonMiddleSexAufg() {
    this.isMiddleSexAufgButtonDisabled = !this.isMiddleSexAufgButtonDisabled;
  }
  toggleButtonHardSexAufg() {
    this.isHardSexAufgButtonDisabled = !this.isHardSexAufgButtonDisabled;
  }
  toggleButtonSoftDark() {
    this.isSoftDarkButtonDisabled = !this.isSoftDarkButtonDisabled;
  }
  toggleButtonMiddleDark() {
    this.isMiddleDarkButtonDisabled = !this.isMiddleDarkButtonDisabled;
  }
  toggleButtonHardDark() {
    this.isHardDarkButtonDisabled = !this.isHardDarkButtonDisabled;
  }
  toggleButtonSoftDarkAufg() {
    this.isSoftDarkAufgButtonDisabled = !this.isSoftDarkAufgButtonDisabled;
  }
  toggleButtonMiddleDarkAufg() {
    this.isMiddleDarkAufgButtonDisabled = !this.isMiddleDarkAufgButtonDisabled;
  }
  toggleButtonHardDarkAufg() {
    this.isHardDarkAufgButtonDisabled = !this.isHardDarkAufgButtonDisabled;
  }

  constructor(
    private router: Router,
    private buttonListService: ButtonListService
  ) {}

  onGamestartClick() {
    console.log('Button wurde geklickt');
    this.buttonsList = [];
    if (!this.isSoftAllgButtonDisabled) this.buttonsList.push('SoftAllg');
    if (!this.isMiddleAllgButtonDisabled) this.buttonsList.push('MiddleAllg');
    if (!this.isHardAllgButtonDisabled) this.buttonsList.push('HardAllg');
    if (!this.isSoftAllgAufgButtonDisabled)
      this.buttonsList.push('SoftAllgAufg');
    if (!this.isMiddleAllgAufgButtonDisabled)
      this.buttonsList.push('MiddleAllgAufg');
    if (!this.isHardAllgAufgButtonDisabled)
      this.buttonsList.push('HardAllgAufg');
    if (!this.isSoftSexButtonDisabled) this.buttonsList.push('SoftSex');
    if (!this.isMiddleSexButtonDisabled) this.buttonsList.push('MiddleSex');
    if (!this.isHardSexButtonDisabled) this.buttonsList.push('HardSex');
    if (!this.isSoftSexAufgButtonDisabled) this.buttonsList.push('SoftSexAufg');
    if (!this.isMiddleSexAufgButtonDisabled)
      this.buttonsList.push('MiddleSexAufg');
    if (!this.isHardSexAufgButtonDisabled) this.buttonsList.push('HardSexAufg');
    if (!this.isSoftDarkButtonDisabled) this.buttonsList.push('SoftDark');
    if (!this.isMiddleDarkButtonDisabled) this.buttonsList.push('MiddleDark');
    if (!this.isHardDarkButtonDisabled) this.buttonsList.push('HardDark');
    if (!this.isSoftDarkAufgButtonDisabled)
      this.buttonsList.push('SoftDarkAufg');
    if (!this.isMiddleDarkAufgButtonDisabled)
      this.buttonsList.push('MiddleDarkAufg');
    if (!this.isHardDarkAufgButtonDisabled)
      this.buttonsList.push('HardDarkAufg');
    this.buttonListService.setButtonsList(this.buttonsList);
    this.router.navigate(['/wahrheit']);
  }
}
