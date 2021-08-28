import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {articles} from "../linkDao";
import {link} from "../interface";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  contractForm = new FormGroup(
    {
      title: new FormControl(),
      url: new FormControl()
    }
  )

  constructor() {
  }

  ngOnInit(): void {
  }

  onsubmit() {
    articles.push(this.contractForm.value);
  }
}
