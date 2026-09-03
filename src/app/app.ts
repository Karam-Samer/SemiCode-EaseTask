import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UsersService } from './services/users.service';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public users!: UserModel[];
  private usersService = inject(UsersService);
  public selectedUser: UserModel | null = null;
  constructor() {
    this.users = this.usersService.getUsers();
  }

  public updateSelectedUser(user: UserModel) {
    this.selectedUser = user;
  }
}
