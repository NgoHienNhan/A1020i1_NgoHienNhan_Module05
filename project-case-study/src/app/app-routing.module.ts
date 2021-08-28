import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddNewCustomerComponent} from "./customer/add-new-customer/add-new-customer.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";

const routes: Routes = [
  {path:'customer/create',component:AddNewCustomerComponent},
  {path:'customer/show',component:ListCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
