import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
  { path: 'ModalPage', loadChildren: './modal-page/modal-page.module#ModalPagePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
