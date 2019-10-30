import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {
  task: Task = new Task();

  constructor() { }

  ngOnInit() {
  }

}
