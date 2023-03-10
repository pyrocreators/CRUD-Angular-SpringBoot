import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {EmployeeListComponent} from "../employee-list/employee-list.component";
import {CreateEmployeeComponent} from "../create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "../update-employee/update-employee.component";
import {EmployeeDetailsComponent} from "../employee-details/employee-details.component";

const routers: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
