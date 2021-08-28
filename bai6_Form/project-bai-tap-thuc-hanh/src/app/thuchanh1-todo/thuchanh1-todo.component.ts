import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface ITodo {
  id: number;
  content: string;
  complete: boolean;
}
let _id = 1;

@Component({
  selector: 'app-thuchanh1-todo',
  templateUrl: './thuchanh1-todo.component.html',
  styleUrls: ['./thuchanh1-todo.component.css']
})
export class Thuchanh1TodoComponent implements OnInit {

  userInput = new FormControl();
  todos: Array<ITodo> = [];
  constructor() { }

  ngOnInit() {
  }

  onChange() {
    const {value} = this.userInput;
    if (value) {
      const todo: ITodo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }

  toggleTodo(i:any) {
    this.todos[i].complete = !this.todos[i].complete;
  }

}
