import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import {EditemployeeComponent} from './editemployee/editemployee.component';
import { AppComponent } from './app.component';

const routes: Routes = [{path:'home', component: HomeComponent},
{path:'add-employee',component:AddemployeeComponent},
{path:'edit-employee',component:EditemployeeComponent},
{
  path: 'home',
  component: AppComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
