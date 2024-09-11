import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

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

  constructor(private router: Router) {}

  onGamestartClick() {
    console.log('Button wurde geklickt');
    this.router.navigate(['/wahrheit']);
  }
}
