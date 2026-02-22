import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  template: `
  <div class="dash">
    <h2 style="color:#ff8fcf;">Welcome to TaskFlow</h2>
    <p style="color:#ddd;">Manage your tasks efficiently</p>

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
  }
  .actions button {
    margin: 12px;
    background-color: #ff8fcf;
    color: #0a0a0a;
    border-radius: 8px;
    padding: 10px 18px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
  }
  .actions button:hover {
    opacity: 0.9;
  }
`]
})
export class DashboardComponent {}