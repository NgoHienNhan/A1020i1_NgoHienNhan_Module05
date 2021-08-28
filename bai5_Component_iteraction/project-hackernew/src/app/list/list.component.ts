import {Component, Input, OnInit} from '@angular/core';
import {link} from "../interface";
import {articles} from "../linkDao";
import {elementAt} from "rxjs/operators";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  articles : link[] =articles
  art : any;

  constructor() { }

  ngOnInit(): void {
  }

  likeChange(value: any) {
    this.art =this.articles.find(elementAt => elementAt.id === value.id);
    this.art.like ++;
  }
}
