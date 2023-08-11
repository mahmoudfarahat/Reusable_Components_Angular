import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadsRoutingModule } from './uploads-routing.module';
import { UploadsComponent } from './uploads/uploads.component';
import { UploadsExampleComponent } from './uploads-example/uploads-example.component';


@NgModule({
  declarations: [
    UploadsComponent,
    UploadsExampleComponent
  ],
  imports: [
    CommonModule,
    UploadsRoutingModule
  ]
})
export class UploadsModule { }
