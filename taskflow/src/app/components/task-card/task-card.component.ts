import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {

  @Input() task: any;

  toggleStatus() {
    this.task.status =
      this.task.status === 'Pending' ? 'Completed' : 'Pending';
  }

}
