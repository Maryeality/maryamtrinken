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
  isHartAllgButtonDisabled = true;
  isSanftSexButtonDisabled = true;
  isMittelSexButtonDisabled = true;
  isHartSexButtonDisabled = true;
  isSanftDarkButtonDisabled = true;
  isMittelDarkButtonDisabled = true;
  isHartDarkButtonDisabled = true;
  isGamestartButton = true;

  buttonsList: string[] = [];

  toggleButtonSanftAllg() {
    this.isSanftAllgButtonDisabled = !this.isSanftAllgButtonDisabled;
  }
  toggleButtonMittelAllg() {
    this.isMittelAllgButtonDisabled = !this.isMittelAllgButtonDisabled;
  }
  toggleButtonHartAllg() {
    this.isHartAllgButtonDisabled = !this.isHartAllgButtonDisabled;
  }
  toggleButtonSanftSex() {
    this.isSanftSexButtonDisabled = !this.isSanftSexButtonDisabled;
  }
  toggleButtonMittelSex() {
    this.isMittelSexButtonDisabled = !this.isMittelSexButtonDisabled;
  }
  toggleButtonHartSex() {
    this.isHartSexButtonDisabled = !this.isHartSexButtonDisabled;
  }
  toggleButtonSanftDark() {
    this.isSanftDarkButtonDisabled = !this.isSanftDarkButtonDisabled;
  }
  toggleButtonMittelDark() {
    this.isMittelDarkButtonDisabled = !this.isMittelDarkButtonDisabled;
  }
  toggleButtonHartDark() {
    this.isHartDarkButtonDisabled = !this.isHartDarkButtonDisabled;
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
    if (!this.isHartAllgButtonDisabled) this.buttonsList.push('HartAllg');
    if (!this.isSanftSexButtonDisabled) this.buttonsList.push('SanftSex');
    if (!this.isMittelSexButtonDisabled) this.buttonsList.push('MittelSex');
    if (!this.isHartSexButtonDisabled) this.buttonsList.push('HartSex');
    if (!this.isSanftDarkButtonDisabled) this.buttonsList.push('SanftDark');
    if (!this.isMittelDarkButtonDisabled) this.buttonsList.push('MittelDark');
    if (!this.isHartDarkButtonDisabled) this.buttonsList.push('HartDark');
    //console.log('Nicht deaktivierte Buttons:', this.buttonsList);
    this.buttonListService.setButtonsList(this.buttonsList);
    this.router.navigate(['/wahrheit']);
  }
}
