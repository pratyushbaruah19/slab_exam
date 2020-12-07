import { ExpmanComponent } from './expman/expman.component';
import { NewexpComponent } from './newexp/newexp.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'expman-component', component: ExpmanComponent },
  { path: 'newexp-component', component: NewexpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
