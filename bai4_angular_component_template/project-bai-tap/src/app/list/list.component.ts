import {Component, Input, OnInit} from '@angular/core';
import {link} from "../interface";
import {articles} from "../linkDao";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  articles : link[] =articles

  constructor() { }

  ngOnInit(): void {
  }

}
