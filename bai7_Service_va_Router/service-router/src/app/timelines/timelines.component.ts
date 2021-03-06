import { Component, OnInit } from '@angular/core';
import {DateUtilService} from "../date-util.service";

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  output: string = '';
  constructor(private diff: DateUtilService) { }

  ngOnInit(): void {
  }

  onChange(value: string){
    this.output = this.diff.getDiffToNow(value);
  }
}
