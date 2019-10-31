import { Injectable } from '@angular/core';
import { Task, TaskDueDate } from './task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private identity = 0;
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) : Boolean {
    this.identity++;
    task.id = this.identity;

    this.tasks.push(task);
    return true;
  }

  updateTaskDueDate(task: Task) : Boolean {
    var toUpdate = this.tasks.find(t => t.id == task.id);
    if (toUpdate) {
      toUpdate.dueDate = task.dueDate;
      return true
    }
    return false
  }

  removeTask(task: Task) {
    console.log("removeTask");
    this.tasks = this.tasks.filter(t => t.id != task.id);
  }

  constructor() { }
}
