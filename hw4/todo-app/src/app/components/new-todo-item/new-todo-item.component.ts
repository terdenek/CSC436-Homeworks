import { Component, OnInit } from '@angular/core';
import { Task, TaskDueDate } from 'src/app/task';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {
  task: Task = new Task();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTask(text: String) {
    this.todoService.addTask({
      id: 0,
      name: text,
      dueDate: TaskDueDate.days
    });
  }
}
