import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  constructor(private taskService: TaskService) {}


  get tasks() {
    return this.taskService.getTasks();
  }

  toggleStatus(index: number) {
    this.taskService.toggleStatus(index);
  }

  deleteTask(index: number) {
    this.taskService.deleteTask(index);
  }
}