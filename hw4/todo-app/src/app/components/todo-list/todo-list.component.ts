import { Component, OnInit } from '@angular/core';
import { Task, TaskDueDate } from 'src/app/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  task: Task = {
    id: 1,
    name: "Test",
    dueDate: TaskDueDate.urgent
  };

  constructor() { }

  ngOnInit() {
  }

}
