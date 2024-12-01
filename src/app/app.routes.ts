import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'day-1',
    loadComponent: () =>
      import('./day-one/day-one.component').then((m) => m.DayOneComponent),
  },
];
