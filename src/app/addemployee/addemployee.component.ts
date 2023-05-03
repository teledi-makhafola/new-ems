import { Employee } from './../interface/employee';
import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
   employee : Employee[] = [];
  constructor(private employeeService:EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.saveEmployee();
  }
  saveEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}


