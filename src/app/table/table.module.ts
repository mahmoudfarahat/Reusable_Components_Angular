import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableNormalComponent } from './table-normal/table-normal.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    TableNormalComponent,
    TableExampleComponent,
    NgxDatatableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    NgxDatatableModule
  ]
})
export class TableModule { }
