import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "../employee.model";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  signupForm: FormGroup;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  onSumbit() {
    this.employeeService.postEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.router.navigate(['/employees']);
    }, error => {
      console.log(error);
    });
  }
}
