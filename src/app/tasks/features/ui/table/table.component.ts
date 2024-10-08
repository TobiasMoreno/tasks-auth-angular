import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task } from '../../../data-access/task.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  tasks = input.required<Task[]>();
  
}
