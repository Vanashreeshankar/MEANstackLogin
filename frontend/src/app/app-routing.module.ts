import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';



import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';




const routes: Routes = [

  
 {path: 'login', component: LoginComponent},

{path: '', component: SiteLayoutComponent,
children:[
  {path:'home', component: HomeComponent},
  {path:'add', component: AddComponent},
 {path:'edit/: id', component: EditComponent},
  {path:'category', component: CategoryComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
]
}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {} 
export const routingComponents = [LoginComponent, CategoryComponent, HomeComponent, AddComponent, EditComponent]

