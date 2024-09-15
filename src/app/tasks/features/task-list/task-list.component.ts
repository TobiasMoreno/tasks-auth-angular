import { Component, inject } from '@angular/core';
import { TableComponent } from '../ui/table/table.component';
import { TaskService } from '../../data-access/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  providers: [TaskService]
})
export default class TaskListComponent {
   _taskService = inject(TaskService);
   tasks = this._taskService.getTasks;
}
