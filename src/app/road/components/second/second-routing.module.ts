import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstGuard } from '../../services';
import * as components from './index';

export const routes: Routes = [
  {
    path: '',
    component: components.SecondComponent,
    children: [
      {
        path: '',
        component: components.AlphaComponent
      },
      {
        path: 'beta',
        component: components.BetaComponent,
        canActivate: [ FirstGuard ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule {}
