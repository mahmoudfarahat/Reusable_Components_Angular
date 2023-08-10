import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { BiographyComponent } from './tabs-example/biography/biography.component';
import { PartnersComponent } from './tabs-example/partners/partners.component';
import { CompaniesComponent } from './tabs-example/companies/companies.component';
import { TabsExampleComponent } from './tabs-example/tabs-example.component';

const routes: Routes = [
  {path:"",
  component:TabsExampleComponent,
 children:[
   {path:'',component:BiographyComponent},
   {path:'partners',component:PartnersComponent},
   {path:'companies',component:CompaniesComponent}

 ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
