import { Component, OnInit } from '@angular/core';
import {Customer} from "../../interface/customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[]=[
    {id:'KH-1',fullName:'Nguyễn Văn a',gender:1,idCard:'212579035',email:'n@gmail.com',idTypeCus:1,phone:'0916309250'
      ,address:'da nang',dateOfBirth:'11/06/1999'},
    {id:'KH-2',fullName:'Nguyễn Văn b',gender:1,idCard:'212579035',email:'áaa@gmail.com',idTypeCus:1,phone:'0916309250'
      ,address:'quang binh',dateOfBirth:'11/06/1999'},
    {id:'KH-3',fullName:'Nguyễn Văn c',gender:1,idCard:'212579035',email:'dđ@gmail.com',idTypeCus:1,phone:'0916309250'
      ,address:'quang tri',dateOfBirth:'11/06/1999'},
    {id:'KH-4',fullName:'Nguyễn Văn d',gender:1,idCard:'212579035',email:'bbbbb@gmail.com',idTypeCus:1,phone:'0916309250'
      ,address:'hue',dateOfBirth:'11/06/1999'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
