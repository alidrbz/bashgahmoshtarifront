
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { Layout } from './shared/layout/layout';

export const routes: Routes = [
  // Login - بدون سایدبار
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.Login)
  },

  // صفحات داخلی با سایدبار مشترک
  {
    path: '',
    component: Layout,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard').then(m => m.Dashboard)
      },
      {
        path: 'rewards',
        loadComponent: () =>
          import('./pages/rewards/rewards').then(m => m.Rewards)
      },
      {
        path: 'transactions',
        loadComponent: () =>
          import('./pages/transactions/transactions').then(m => m.Transactions)
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile').then(m => m.Profile)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },

  // آدرس‌های ناشناخته
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
