import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondRoutingModule } from './second-routing.module';
import * as components from './index';

@NgModule({
  imports: [
    CommonModule,
    SecondRoutingModule
  ],
  declarations: [
    components.SecondComponent,
    components.BetaComponent
  ],
  exports: [ components.SecondComponent ]
})
export class SecondModule {}
