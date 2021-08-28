import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}
@Component({
  selector: 'app-baitap1-register',
  templateUrl: './baitap1-register.component.html',
  styleUrls: ['./baitap1-register.component.css']
})
export class Baitap1RegisterComponent implements OnInit {
  registerForm= new FormGroup({
    email:new FormControl(),
    pwGroup:new FormControl(),
    password:new FormControl(),
    confirmPassword:new FormControl(),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: '',
        confirmPassword: ''
      }, {validator: comparePassword})
    });

    this.registerForm.patchValue({
      email: 'info@example.com'
    });
  }
  onSubmit() {}
}
