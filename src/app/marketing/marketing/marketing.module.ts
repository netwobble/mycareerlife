import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module';
import { MarketingOneComponent } from '../marketing-one/marketing-one.component';
import { MarketingTwoComponent } from '../marketing-two/marketing-two.component';
import { MarketingThreeComponent } from '../marketing-three/marketing-three.component';

@NgModule({
  declarations: [ MarketingOneComponent, MarketingTwoComponent, MarketingThreeComponent],
  imports: [
    CommonModule,
    MarketingRoutingModule
  ]
})
export class MarketingModule { }
