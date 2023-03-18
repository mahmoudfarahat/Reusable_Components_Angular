import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'elements', loadChildren: () => import('./elements/elements.module').then(a => a.ElementsModule)},
  {path:'collections', loadChildren: () => import('./collections/collections.module').then(a => a.CollectionsModule)},
  {path:'views', loadChildren: () => import('./views/views.module').then(a => a.ViewsModule)},
  {path:'mods', loadChildren: () => import('./mods/mods.module').then(a => a.ModsModule)},


  {path:'',component:HomeComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
