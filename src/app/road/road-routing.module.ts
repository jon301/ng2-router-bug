import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoadComponent } from './road.component';
import * as components from './components';

export const routes: Routes = [
  {
    path: '',
    component: RoadComponent,
    children: [
      {
        path: 'second',
        loadChildren: './components/second/second.module#SecondModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoadRoutingModule {}
