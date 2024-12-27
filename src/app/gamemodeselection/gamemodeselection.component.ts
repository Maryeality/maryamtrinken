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
  isSoftSexButtonDisabled = true;
  isMiddleSexButtonDisabled = true;
  isHardSexButtonDisabled = true;
  isSoftDarkButtonDisabled = true;
  isMiddleDarkButtonDisabled = true;
  isHardDarkButtonDisabled = true;
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
  toggleButtonSoftSex() {
    this.isSoftSexButtonDisabled = !this.isSoftSexButtonDisabled;
  }
  toggleButtonMiddleSex() {
    this.isMiddleSexButtonDisabled = !this.isMiddleSexButtonDisabled;
  }
  toggleButtonHardSex() {
    this.isHardSexButtonDisabled = !this.isHardSexButtonDisabled;
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
    if (!this.isSoftSexButtonDisabled) this.buttonsList.push('SoftSex');
    if (!this.isMiddleSexButtonDisabled) this.buttonsList.push('MiddleSex');
    if (!this.isHardSexButtonDisabled) this.buttonsList.push('HardSex');
    if (!this.isSoftDarkButtonDisabled) this.buttonsList.push('SoftDark');
    if (!this.isMiddleDarkButtonDisabled) this.buttonsList.push('MiddleDark');
    if (!this.isHardDarkButtonDisabled) this.buttonsList.push('HardDark');
    //console.log('Nicht deaktivierte Buttons:', this.buttonsList);
    this.buttonListService.setButtonsList(this.buttonsList);
    this.router.navigate(['/wahrheit']);
  }
}
