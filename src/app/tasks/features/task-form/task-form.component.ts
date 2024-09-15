import { Component, effect, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewTask, Task, TaskService } from '../../data-access/task.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
  providers: [TaskService]
})
export default class TaskFormComponent {
  private _formBuilder = inject(FormBuilder);
  private _taskService = inject(TaskService);
  private _router = inject(Router);

  constructor() {
    effect(() => {
      const id = this.id();
      if (id) {
        this.getTaskById(id);
      }
    });
  }
  async getTaskById(id: string) {
    const taskSnapshot = await this._taskService.getTaskById(id);
    if (!taskSnapshot.exists()) return;

    const task = taskSnapshot.data() as Task;

    this.form.patchValue(task);
  }

  loading = signal(false);
  id = input.required<string>();

  form = this._formBuilder.group({
    title: this._formBuilder.control('', [Validators.required]),
    completed: this._formBuilder.control(false, [Validators.required]),
  });

  async submit() {
    if (this.form.invalid) return;

    try {
      this.loading.set(true);
      const task: NewTask = {
        title: this.form.value.title || '',
        completed: !!this.form.value.completed,
      };

      const id = this.id();

      if (id) {
        await this._taskService.update(task, id);
      } else {
        await this._taskService.create(task);
      }

      toast.success(`Task ${id ? 'updated ' : 'created '} succesfully.`);
      this._router.navigateByUrl('/tasks');
    } catch (error) {
      toast.success('An error has happened');
    } finally {
      this.loading.set(false);
    }
  }
}
