import { Routes } from '@angular/router';
import DashboardLayoutComponent from './dashboard/layout/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./dashboard/pages/home-page/home-page.component'),
      },
      {
        path: 'remove-zone-js',
        loadComponent: () =>
          import(
            './dashboard/pages/remove-zone-page/remove-zone-page.component'
          ),
      },
      {
        path: 'control-flow',
        loadComponent: () =>
          import(
            './dashboard/pages/control-flow-page/control-flow-page.component'
          ),
      },
      {
        path: 'inputs-outputs',
        loadComponent: () =>
          import(
            './dashboard/pages/inputs-outputs-page/inputs-outputs-page.component'
          ),
      },
      {
        path: 'ng-optimized-image',
        loadComponent: () =>
          import(
            './dashboard/pages/optimized-img-page/optimized-img-page.component'
          ),
      },
      {
        path: 'ng-content',
        loadComponent: () =>
          import('./dashboard/pages/ng-content-page/ng-content-page.component'),
      },
      {
        path: 'defer',
        loadComponent: () =>
          import('./dashboard/pages/defer-page/defer-page.component'),
      },
      {
        path: 'forms',
        loadComponent: () =>
          import('./dashboard/pages/forms-page/forms-page.component'),
      },
      {
        path: 'view-transitions',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transitions-page/view-transitions-page.component'
          ),
      },
      {
        path: 'router-functions',
        loadComponent: () =>
          import(
            './dashboard/pages/router-functions-page/router-functions-page.component'
          ),
      },
      {
        path: 'event-replay',
        loadComponent: () =>
          import(
            './dashboard/pages/event-replay-page/event-replay-page.component'
          ),
      },
      {
        path: '**',
        redirectTo: '/',
      },
    ],
  },
];
