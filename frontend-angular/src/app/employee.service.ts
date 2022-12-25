import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL: string = "http://localhost:9095/api/v1/employees";


  constructor(private http: HttpClient) {
  }

  getEmployeesList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseURL);
  }

  postEmployee(employee: Employee): Observable<Object> {
    return this.http.post(this.baseURL, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseURL + "/" + id);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.http.put(this.baseURL + "/" + id, employee);
  }

  deleteEmployee(id: number) : Observable<any> {
    return this.http.delete(this.baseURL + "/" + id);
  }
}
