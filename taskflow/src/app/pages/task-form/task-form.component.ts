import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],  
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  title = '';
  description = '';

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  submit(form: any) {
    if (form.invalid) return;

    this.taskService.addTask({
      title: this.title,
      description: this.description,
      status: 'Pending'
    });

    this.router.navigate(['/tasks']);
  }
}