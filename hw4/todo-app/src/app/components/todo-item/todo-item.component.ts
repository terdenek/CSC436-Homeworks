import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task, TaskDueDate } from 'src/app/task';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Task;
  @Output() updateEvent = new EventEmitter();

  dueDateTypes: TaskDueDate[] = [
    TaskDueDate.days,
    TaskDueDate.week,
    TaskDueDate.urgent
  ];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  deleteTask() {
    console.log("deleteTask");
    this.todoService.removeTask(this.task);
    // refresh at top
    this.updateEvent.next();
  }
  changeDueDate(dueDate) {
    this.task.dueDate = dueDate;
    this.todoService.updateTaskDueDate(this.task);
  }
}
