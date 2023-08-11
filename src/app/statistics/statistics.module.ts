import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatisticsExampleComponent } from './statistics-example/statistics-example.component';


@NgModule({
  declarations: [
    StatisticsComponent,
    StatisticsExampleComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }
