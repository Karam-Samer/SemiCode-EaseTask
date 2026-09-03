import { Service } from '@angular/core';
import { TaskInfoModel, TaskModel } from '../models/task.model';

@Service()
export class TasksService {
  public tasks: TaskModel[] = [];

  constructor() {
    let storedTasks: string = localStorage.getItem('tasks') ?? JSON.stringify([]);
    this.tasks = JSON.parse(storedTasks);
    this.updateLocalStorage();
  }

  public getTasks(userId: string): TaskModel[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  public addTask(task: TaskInfoModel, userId: string) {
    let newTask: TaskModel = {
      id: new Date().getTime().toString(),
      userId: userId,
      ...task,
    };
    this.tasks.push(newTask);
    this.updateLocalStorage();  
  }

  public finishTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
