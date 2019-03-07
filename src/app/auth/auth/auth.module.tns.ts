import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [
    AuthRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthModule { }
