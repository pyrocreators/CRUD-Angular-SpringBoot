import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,  // for routing,
    ReactiveFormsModule,
    FormsModule,
    // forms
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AppRoutingModule
  ]
})
export class AppModule { }
