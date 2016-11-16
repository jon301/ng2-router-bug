import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadRoutingModule } from './road-routing.module';
import { RoadComponent } from './road.component';
import * as components from './components';

@NgModule({
  imports: [
    CommonModule,
    RoadRoutingModule
  ],
  declarations: [
    RoadComponent
  ]
})
export class RoadModule { }
