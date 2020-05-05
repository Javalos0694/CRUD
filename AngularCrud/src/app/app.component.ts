import { Component} from '@angular/core';
import {Employee} from './models/employee'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  employees : Array<Employee>=[
    {id: 1, name:'Jose', country:'USA'},
    {id: 2, name:'Carlos', country:'ITALY'},
    {id: 3, name:'Annie', country:'PERU'}
  ];

  selectedEmployee: Employee= new Employee();

  delete(){
    this.employees= this.employees.filter(x => x!= this.selectedEmployee);
    this.selectedEmployee= new Employee();
  }

  openForEdit(employee:Employee){
    this.selectedEmployee = employee;
  }

  addOrEdit(){
    if(this.selectedEmployee.id===0 && (this.selectedEmployee.name!=null && this.selectedEmployee.country!=null)){
      this.selectedEmployee.id= this.employees.length+1;
      this.employees.push(this.selectedEmployee);
    }
    this.selectedEmployee= new Employee();
  }
}
