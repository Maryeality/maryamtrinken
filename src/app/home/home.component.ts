import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamemodeselectionComponent } from '../gamemodeselection/gamemodeselection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, GamemodeselectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
