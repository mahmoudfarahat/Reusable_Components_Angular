import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionExampleComponent } from './accordion-example/accordion-example.component';


@NgModule({
  declarations: [
    AccordionComponent,
    AccordionExampleComponent
  ],
  imports: [
    CommonModule,
    AccordionRoutingModule
  ]
})
export class AccordionModule { }
