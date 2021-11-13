import { EmployeesComponent } from './pages/employees/employees.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageLayoutComponent } from './Layout/page-layout/page-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'page',component:PageLayoutComponent,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'employees',component:EmployeesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
