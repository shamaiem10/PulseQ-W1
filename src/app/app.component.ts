import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, TaskListComponent, RouterModule], // <-- ADD RouterModule HERE
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
