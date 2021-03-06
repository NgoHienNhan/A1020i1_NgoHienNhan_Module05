import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  output: number | undefined;
  first!: number;
  second!: number;
  operator = '+';
  onFirstChange(value:number) {
    this.first = Number(value);
  }
  onSecondChange(value:number) {
    this.second = Number(value);
  }
  onSelectChange(value:any) {
    this.operator = value;
  }
  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
