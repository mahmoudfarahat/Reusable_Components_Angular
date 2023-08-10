import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'elements', loadChildren: () => import('./elements/elements.module').then(a => a.ElementsModule)},
   {path:'views', loadChildren: () => import('./views/views.module').then(a => a.ViewsModule)},


  {path:'accordion', loadChildren: () => import('./accordion/accordion.module').then(a => a.AccordionModule)},
  {path:'modal', loadChildren: () => import('./modal/modal.module').then(a => a.ModalModule)},
  {path:'table', loadChildren: () => import('./table/table.module').then(a => a.TableModule)},
  {path:'placeholder', loadChildren: () => import('./placeholder/placeholder.module').then(a => a.PlaceholderModule)},
  {path:'tabs', loadChildren: () => import('./tabs/tabs.module').then(a => a.TabsModule)},


  {path:'',component:HomeComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
