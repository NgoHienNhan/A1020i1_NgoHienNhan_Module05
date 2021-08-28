import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Thuchanh1TodoComponent } from './thuchanh1-todo/thuchanh1-todo.component';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Baitap1RegisterComponent } from './baitap1-register/baitap1-register.component';

@NgModule({
  declarations: [
    AppComponent,
    Thuchanh1TodoComponent,
    Baitap1RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
