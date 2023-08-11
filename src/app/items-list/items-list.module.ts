import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsListRoutingModule } from './items-list-routing.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsListExampleComponent } from './items-list-example/items-list-example.component';


@NgModule({
  declarations: [
    ItemsListComponent,
    ItemsListExampleComponent
  ],
  imports: [
    CommonModule,
    ItemsListRoutingModule
  ]
})
export class ItemsListModule { }
