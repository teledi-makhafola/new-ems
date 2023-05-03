import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../interface/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private service: EmployeeService) {}

  ngOnInit(): void {
    this.getEmp();
  }
  getEmp() {
    this.service.getEmployeeList().subscribe((service: any) => {
      console.log(service);
      this.employees = service;
    });
  }
}

