import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdownt-parent',
  templateUrl: './countdownt-parent.component.html',
  styleUrls: ['./countdownt-parent.component.css']
})
export class CountdowntParentComponent implements OnInit {

  countdownMsg = '';
  countdownAliasMsg = '';

  finishCountdown() {
    this.countdownMsg = 'Finished!';
  }

  endCountdown() {
    this.countdownAliasMsg = 'Ended!';
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}
