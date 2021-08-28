import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-thuc-hanh1',
  templateUrl: './thuc-hanh1.component.html',
  styleUrls: ['./thuc-hanh1.component.css']
})
export class ThucHanh1Component implements OnInit {

  @Input() cardName: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
