import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  // Login
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.Login)
  },

  // Dashboard
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/dashboard/dashboard').then(m => m.Dashboard)
  },

  // Rewards
  {
    path: 'rewards',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/rewards/rewards').then(m => m.Rewards)
  },

  // Transactions
  {
    path: 'transactions',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/transactions/transactions').then(m => m.Transactions)
  },

  // Profile
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/profile/profile').then(m => m.Profile)
  },

  // Default
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  // Not Found
  {
    path: '**',
    redirectTo: 'dashboard'
  }

];