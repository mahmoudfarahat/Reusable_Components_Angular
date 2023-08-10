import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';



@NgModule({
  declarations: [
    ElementsHomeComponent,
 
    SegmentComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule

  ],
  exports:[

  ]
})
export class ElementsModule { }
