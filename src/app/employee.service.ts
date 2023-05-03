import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './interface/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "http://localhost:8080/employees";
  
  constructor(private http: HttpClient) { 
  }
  
  getEmployeeList(){  
    return this.http.get<Employee[]>(`${this.url}`);  
  }

  addEmployee(employee: object) {  
    return this.http.post(`${this.url}`, employee);  
  } 
  

}
