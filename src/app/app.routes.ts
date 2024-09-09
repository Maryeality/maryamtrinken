import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamemodeselectionComponent } from './gamemodeselection/gamemodeselection.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GamemodeselectionComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
