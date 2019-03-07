import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';




export const routes: Routes = [

  {
      path: '',
      component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
},
  {
    path: 'logout',
    component: LogoutComponent
},

];
