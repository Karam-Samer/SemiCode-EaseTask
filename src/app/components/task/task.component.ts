import { Component, inject, input } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { DatePipe } from '@angular/common';
import { TasksService } from '../../services/tasks.service';

@Component({
  imports: [DatePipe],
  selector: 'app-task',
  styleUrl: './task.component.scss',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  public task = input.required<TaskModel>();
  private taskService = inject(TasksService);

  public completeTask() {
    this.taskService.finishTask(this.task().id);
  }
}
