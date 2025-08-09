import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  { path: 'dashboard', component: Dashboard },
  { path: '**', redirectTo: '' }
];
