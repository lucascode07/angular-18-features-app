import { Routes } from '@angular/router';
import DashboardLayoutComponent from './dashboard/layout/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./dashboard/pages/home-page/home-page.component'),
      },
      {
        path: 'inputs-outputs',
        loadComponent: () =>
          import(
            './dashboard/pages/inputs-outputs-page/inputs-outputs-page.component'
          ),
      },
      {
        path: 'view-transitions',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transitions-page/view-transitions-page.component'
          ),
      },
      {
        path: '**',
        redirectTo: '/',
      },
    ],
  },
];
