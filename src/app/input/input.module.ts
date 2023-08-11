import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { InputComponent } from './input/input.component';
import { InputExampleComponent } from './input-example/input-example.component';


@NgModule({
  declarations: [
    InputComponent,
    InputExampleComponent
  ],
  imports: [
    CommonModule,
    InputRoutingModule,
    ReactiveFormsModule
  ]
})
export class InputModule { }
