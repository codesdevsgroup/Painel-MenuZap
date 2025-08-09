import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Dashboard } from './dashboard/dashboard';
import { ForgotPassword } from './components/forgot-password/forgot-password';
import { ResetPassword } from './components/reset-password/reset-password';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      { path: 'forgot-password', component: ForgotPassword },
      { path: 'reset-password', component: ResetPassword }, // Idealmente, esta rota teria um token
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  { path: 'dashboard', component: Dashboard },
  { path: '**', redirectTo: '' }
];
