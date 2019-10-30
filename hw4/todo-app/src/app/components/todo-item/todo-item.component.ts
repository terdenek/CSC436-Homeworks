import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task, TaskDueDate } from 'src/app/task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Task;
  @Output() updateEvent = new EventEmitter<Task>();

  dueDateTypes: TaskDueDate[] = [
    TaskDueDate.days,
    TaskDueDate.week,
    TaskDueDate.urgent
  ];

  constructor() { }

  ngOnInit() {
  }

  changeDueDate(dueDate) {
    this.task.dueDate = dueDate;
    this.updateEvent.next(this.task);
  }
}
