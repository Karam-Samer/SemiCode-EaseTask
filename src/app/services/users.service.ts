import { Service } from '@angular/core';
import { UserModel } from '../models/user.model';

@Service()
export class UsersService {
  public users: UserModel[] = [
    { id: 'user1', name: 'Mohamed Atya', avatar: 'user.jpg' },
    { id: 'user2', name: 'Sarah Ahmed', avatar: 'user.jpg' },
    { id: 'user3', name: 'Omar Khaled', avatar: 'user.jpg' },
    { id: 'user4', name: 'Sama Mohamed', avatar: 'user.jpg' },
    { id: 'user5', name: 'Aliaa El-Sayed', avatar: 'user.jpg' },
    { id: 'user6', name: 'Ahmed Mohamed', avatar: 'user.jpg' },
  ];

  public getUsers(): UserModel[] {
    return this.users;
  }
}
