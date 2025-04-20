import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamemodeselectionComponent } from './gamemodeselection/gamemodeselection.component';
import { GamemodewahrheitComponent } from './gamemodewahrheit/gamemodewahrheit.component';
import { CSVImportComponent } from './csvimport/csvimport.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'selection', component: GamemodeselectionComponent },
  { path: 'game', component: GamemodewahrheitComponent },
  { path: 'csv', component: CSVImportComponent },
  { path: '', redirectTo: 'selection', pathMatch: 'full' },
];
