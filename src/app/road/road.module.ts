import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadRoutingModule } from './road-routing.module';
import { RoadComponent } from './road.component';
import { FirstGuard } from './services';
import * as components from './components';

@NgModule({
  imports: [
    CommonModule,
    RoadRoutingModule
  ],
  providers: [
    FirstGuard
  ],
  declarations: [
    RoadComponent,
    components.ZeroComponent,
    components.FirstComponent
  ]
})
export class RoadModule { }
