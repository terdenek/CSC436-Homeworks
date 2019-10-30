import { Component, OnInit, Input } from '@angular/core';
import { Task, TaskDueDate } from 'src/app/task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Task;
  
  dueDateTypes: TaskDueDate[] = [
    TaskDueDate.days,
    TaskDueDate.week,
    TaskDueDate.urgent
  ];

  constructor() { }

  ngOnInit() {
  }

  changeDueDate(dueDate: TaskDueDate): void {
    this.task.dueDate = dueDate;
  }
}
