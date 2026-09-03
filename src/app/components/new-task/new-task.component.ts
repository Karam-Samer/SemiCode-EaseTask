import { Component, inject, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  imports: [FormsModule],
  selector: 'app-new-task',
  styleUrl: './new-task.component.scss',
  templateUrl: './new-task.component.html',
})
export class NewTaskComponent {
  public closePopupEvent = output<boolean>();
  public tasksService = inject(TasksService);
  public selectedUserId = input.required<string>();

  public onClosePopup() {
    
    this.closePopupEvent.emit(false);
  }

  public addTask(ele: NgForm) {
    if (ele.invalid) return;
    this.tasksService.addTask(ele.value, this.selectedUserId());
    this.onClosePopup();
  }
}
