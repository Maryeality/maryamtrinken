import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  isSanftButtonDisabled = true;
  isMittelButtonDisabled = true;
  isHartButtonDisabled = true;

  toggleButtonSanft() {
    this.isSanftButtonDisabled = !this.isSanftButtonDisabled;
  }
  toggleButtonMittel() {
    this.isMittelButtonDisabled = !this.isMittelButtonDisabled;
  }

  toggleButtonHart() {
    this.isHartButtonDisabled = !this.isHartButtonDisabled;
  }
}
