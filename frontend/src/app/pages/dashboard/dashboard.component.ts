import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="dash">
      <h2>Welcome to TaskFlow</h2>
      <p>Manage your tasks efficiently</p>

      <div class="actions">
        <button routerLink="/tasks">View Tasks</button>
        <button routerLink="/tasks/new">Create Task</button>
      </div>
    </div>
  `,
  styles: [`
    .dash {
      text-align: center;
      margin-top: 80px;
      color: #fff;
    }

    .dash h2 {
      color: #ff8fcf;
      font-size: 32px;
    }

    .dash p {
      color: #ddd;
      margin-bottom: 24px;
    }

    .actions button {
      margin: 12px;
      background-color: #ff8fcf;
      color: #0a0a0a;
      border-radius: 8px;
      padding: 10px 18px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      transition: 0.2s;
    }

    .actions button:hover {
      opacity: 0.9;
    }
  `]
})
export class DashboardComponent {}