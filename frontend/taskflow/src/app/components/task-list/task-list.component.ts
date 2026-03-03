import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks: Task[] = [
    {
      title: 'Learn Angular',
      description: 'Understand standalone components',
      status: 'Pending'
    },
    {
      title: 'Build TaskFlow UI',
      description: 'Create task list and task cards',
      status: 'Completed'
    },
    {
      title: 'Submit Assignment',
      description: 'Push code to GitHub',
      status: 'Pending'
    }
  ];

  toggleStatus(index: number) {
    this.tasks[index].status =
      this.tasks[index].status === 'Pending'
        ? 'Completed'
        : 'Pending';
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

}