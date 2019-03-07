import { Routes } from '@angular/router';


import { MarketingOneComponent } from '../marketing-one/marketing-one.component';
import { MarketingTwoComponent } from '../marketing-two/marketing-two.component';
import { MarketingThreeComponent } from '../marketing-three/marketing-three.component';



export const routes: Routes = [

  {
      path: '',
      component: MarketingOneComponent
  },
  {
    path: 'marketing',
    component: MarketingOneComponent
  },
  {
    path: 'marketing-two',
    component: MarketingTwoComponent
  },
  {
    path: 'marketing-three',
    component: MarketingThreeComponent
  },

];
