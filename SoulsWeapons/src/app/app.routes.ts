import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { DashboardPlay } from './components/dashboard-play/dashboard-play';

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
  path: '',
  component: Home,
  pathMatch: 'full'
}


];


