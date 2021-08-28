import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-thuc-hanh2-child',
  templateUrl: './thuc-hanh2-child.component.html',
  styleUrls: ['./thuc-hanh2-child.component.css']
})
export class ThucHanh2ChildComponent implements OnInit {

  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() width: any = 50;

  constructor() {
  }

  ngOnInit(): void {
  }

}
