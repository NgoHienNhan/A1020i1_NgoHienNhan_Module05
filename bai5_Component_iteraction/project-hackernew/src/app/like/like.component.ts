import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit, OnChanges {

  @Input() id: number = 0;
  @Output()
  likeChange = new EventEmitter<any>()

  public likeUpdate:number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  likeClick() {
    this.likeChange.emit({id:this.id});
    this.likeUpdate=0;
  }
}
