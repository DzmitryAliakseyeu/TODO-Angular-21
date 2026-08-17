import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/layout/layout/layout').then((m) => m.Layout),
    }
];
