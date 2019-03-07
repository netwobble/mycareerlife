import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: './auth/auth/auth.module#AuthModule'
  },
  {
    path: 'marketing',
    loadChildren: './marketing/marketing/marketing.module#MarketingModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard/dashboard.module#DashboardModule'
  },
];
