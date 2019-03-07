import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MarketingRoutingModule } from './marketing-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { MarketingOneComponent } from '../marketing-one/marketing-one.component';
import { MarketingTwoComponent } from '../marketing-two/marketing-two.component';
import { MarketingThreeComponent } from '../marketing-three/marketing-three.component';

@NgModule({
  declarations: [ MarketingOneComponent, MarketingTwoComponent, MarketingThreeComponent],
  imports: [
    MarketingRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MarketingModule { }
