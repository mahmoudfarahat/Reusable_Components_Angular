import { TimesDirective } from './times.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholderRoutingModule } from './placeholder-routing.module';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { PlaceholderExampleComponent } from './placeholder-example/placeholder-example.component';


@NgModule({
  declarations: [
    PlaceholderComponent,
    PlaceholderExampleComponent,
    TimesDirective
  ],
  imports: [
    CommonModule,
    PlaceholderRoutingModule
  ]
})
export class PlaceholderModule { }
