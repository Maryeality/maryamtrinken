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
  isMittelAllgButtonDisabled = true;
  isHardAllgButtonDisabled = true;
  isSanftSexButtonDisabled = true;
  isMittelSexButtonDisabled = true;
  isHardSexButtonDisabled = true;
  isSanftDarkButtonDisabled = true;
  isMittelDarkButtonDisabled = true;
  isHardDarkButtonDisabled = true;
  isGamestartButton = true;

  buttonsList: string[] = [];

  toggleButtonSanftAllg() {
    this.isSanftAllgButtonDisabled = !this.isSanftAllgButtonDisabled;
  }
  toggleButtonMittelAllg() {
    this.isMittelAllgButtonDisabled = !this.isMittelAllgButtonDisabled;
  }
  toggleButtonHardAllg() {
    this.isHardAllgButtonDisabled = !this.isHardAllgButtonDisabled;
  }
  toggleButtonSanftSex() {
    this.isSanftSexButtonDisabled = !this.isSanftSexButtonDisabled;
  }
  toggleButtonMittelSex() {
    this.isMittelSexButtonDisabled = !this.isMittelSexButtonDisabled;
  }
  toggleButtonHardSex() {
    this.isHardSexButtonDisabled = !this.isHardSexButtonDisabled;
  }
  toggleButtonSanftDark() {
    this.isSanftDarkButtonDisabled = !this.isSanftDarkButtonDisabled;
  }
  toggleButtonMittelDark() {
    this.isMittelDarkButtonDisabled = !this.isMittelDarkButtonDisabled;
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
    if (!this.isMittelAllgButtonDisabled) this.buttonsList.push('MittelAllg');
    if (!this.isHardAllgButtonDisabled) this.buttonsList.push('HardAllg');
    if (!this.isSanftSexButtonDisabled) this.buttonsList.push('SanftSex');
    if (!this.isMittelSexButtonDisabled) this.buttonsList.push('MittelSex');
    if (!this.isHardSexButtonDisabled) this.buttonsList.push('HardSex');
    if (!this.isSanftDarkButtonDisabled) this.buttonsList.push('SanftDark');
    if (!this.isMittelDarkButtonDisabled) this.buttonsList.push('MittelDark');
    if (!this.isHardDarkButtonDisabled) this.buttonsList.push('hardDark');
    //console.log('Nicht deaktivierte Buttons:', this.buttonsList);
    this.buttonListService.setButtonsList(this.buttonsList);
    this.router.navigate(['/wahrheit']);
  }
}
