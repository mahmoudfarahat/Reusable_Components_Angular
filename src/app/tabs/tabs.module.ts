import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsVerticalComponent } from './tabs-vertical/tabs-vertical.component';
import { TabsExampleComponent } from './tabs-example/tabs-example.component';


@NgModule({
  declarations: [
    TabsVerticalComponent,
    TabsExampleComponent
  ],
  imports: [
    CommonModule,
    TabsRoutingModule
  ]
})
export class TabsModule { }
