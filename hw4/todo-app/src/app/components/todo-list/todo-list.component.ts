import { Component, OnInit } from '@angular/core';
import { Task, TaskDueDate } from 'src/app/task';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: Task[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.addTask({ id: 0, name: "Clean up 1", dueDate: TaskDueDate.days });
    this.todoService.addTask({ id: 0, name: "Clean up 2", dueDate: TaskDueDate.week });
    this.todoService.addTask({ id: 0, name: "Clean up 3", dueDate: TaskDueDate.urgent });
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.todoService.getTasks();
  }
  
  updateTask(task: Task) {
    console.log(task);
    console.log(this.todoService);
    this.todoService.updateTaskDueDate(task);
    this.getTasks();
  }
}
