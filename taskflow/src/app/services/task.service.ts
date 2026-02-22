import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    {
      title: 'Learn Angular',
      description: 'Understand standalone components',
      status: 'Pending'
    },
    {
      title: 'Build TaskFlow UI',
      description: 'Create task list and task cards',
      status: 'Completed'
    }
  ];

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleStatus(index: number) {
    this.tasks[index].status =
      this.tasks[index].status === 'Pending'
        ? 'Completed'
        : 'Pending';
  }
}