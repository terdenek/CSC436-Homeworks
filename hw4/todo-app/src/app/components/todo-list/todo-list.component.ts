import { Component, OnInit } from '@angular/core';
import { Task, TaskDueDate } from 'src/app/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: Task[] = [
    { id: 1, name: "Clean up 1", dueDate: TaskDueDate.days },
    { id: 2, name: "Clean up 2", dueDate: TaskDueDate.days },
    { id: 3, name: "Clean up 3", dueDate: TaskDueDate.days }
  ];

  constructor() { }

  ngOnInit() {
  }

}
