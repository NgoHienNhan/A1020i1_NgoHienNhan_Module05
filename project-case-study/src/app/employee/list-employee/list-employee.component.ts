import { Component, OnInit } from '@angular/core';
import {Employee} from "../../interface/employee";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[] = [
    {id:'NV-1',fullName:'Trần văn a',birthday:'03/06/1999',phone:'0916309250',idCard:'212579035',email:'n@gmail.com',
    idDivision:1,idEducationDegree:1,idPosition:2,salary:5000},
    {id:'NV-3',fullName:'Trần văn b',birthday:'11/06/1999',phone:'0916309250',idCard:'212579035',email:'n@gmail.com',
      idDivision:1,idEducationDegree:1,idPosition:2,salary:5000},
    {id:'NV-4',fullName:'Trần văn c',birthday:'25/06/1999',phone:'0916309250',idCard:'212579035',email:'n@gmail.com',
      idDivision:1,idEducationDegree:1,idPosition:2,salary:5000},
    {id:'NV-5',fullName:'Trần văn d',birthday:'09/06/1999',phone:'0916309250',idCard:'212579035',email:'n@gmail.com',
      idDivision:1,idEducationDegree:1,idPosition:2,salary:5000},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
