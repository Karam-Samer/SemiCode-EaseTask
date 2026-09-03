import { Component, input } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.component.scss',
  templateUrl: './user.component.html',
})
export class UserComponent {
  public user = input.required<UserModel>();
  public isSelected = input<boolean>(false);
}
