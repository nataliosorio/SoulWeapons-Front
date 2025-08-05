import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { DashboardPlay } from './components/dashboard-play/dashboard-play';
import { Armas } from './components/armas/armas';
import { PlayGame } from './components/play-game/play-game';

export const routes: Routes = [

{
    path: '',
    component: Home, // Se carga al inicio
},
//   {
//     path: 'about',
//     component: AboutComponent,
//   },
{
    path: 'dashboardGame',
    component: DashboardPlay
},

{
  path: 'playGame',
  component: PlayGame
},

{
    path: 'armas',
    component: Armas
},

{
  path: '',
  component: Home,
  pathMatch: 'full'
}


];


