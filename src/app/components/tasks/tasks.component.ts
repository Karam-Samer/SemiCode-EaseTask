import { Component, inject, input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { UserModel } from '../../models/user.model';
import { TasksService } from '../../services/tasks.service';
import { TaskModel } from '../../models/task.model';

@Component({
  imports: [TaskComponent, NewTaskComponent],
  selector: 'app-tasks',
  styleUrl: './tasks.component.scss',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  public user = input.required<UserModel>();
  private tasksService = inject(TasksService);
  public isPopupOpen : boolean = false;

  get getTasks() {
    return this.tasksService.getTasks(this.user().id);
  }
  public togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }
}
