import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating-bar-parent',
  templateUrl: './rating-bar-parent.component.html',
  styleUrls: ['./rating-bar-parent.component.css']
})
export class RatingBarParentComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onRateChange(value: any) {
    console.log(value);
  }
}
