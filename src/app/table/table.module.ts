import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableNormalComponent } from './table-normal/table-normal.component';
import { TableExampleComponent } from './table-example/table-example.component';


@NgModule({
  declarations: [
    TableNormalComponent,
    TableExampleComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule
  ]
})
export class TableModule { }
