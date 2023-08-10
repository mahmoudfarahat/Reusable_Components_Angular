import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal/modal.component';
import { ModalExampleComponent } from './modal-example/modal-example.component';


@NgModule({
  declarations: [
    ModalComponent,
    ModalExampleComponent
  ],
  imports: [
    CommonModule,
    ModalRoutingModule
  ]
})
export class ModalModule { }
