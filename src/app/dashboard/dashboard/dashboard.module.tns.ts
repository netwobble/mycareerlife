import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { MainComponent } from '../main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    DashboardRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
