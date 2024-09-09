import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gamemodeselection',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './gamemodeselection.component.html',
  styleUrl: './gamemodeselection.component.scss',
})
export class GamemodeselectionComponent {
  title: string = '';
}
