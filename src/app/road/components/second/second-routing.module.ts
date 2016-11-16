import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as components from './index';

export const routes: Routes = [
  {
    path: '',
    component: components.SecondComponent,
    children: [
      {
        path: 'beta',
        component: components.BetaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule {}
