import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {
      id: 1,
      username: 'john_doe',
      email: 'john.doe@example.com',
      registrationTime: new Date('2023-01-15T09:30:00'),
      lastLogin: new Date('2024-10-25T12:00:00'),
      status: 'Confirmed',
    },
    {
      id: 2,
      username: 'jane_smith',
      email: 'jane.smith@example.com',
      registrationTime: new Date('2022-07-10T14:45:00'),
      lastLogin: new Date('2024-10-28T15:30:00'),
      status: 'Confirmed',
    },
    {
      id: 3,
      username: 'alice_wonder',
      email: 'alice.wonder@example.com',
      registrationTime: new Date('2021-05-22T18:00:00'),
      lastLogin: new Date('2024-10-27T17:45:00'),
      status: 'Blocked',
    },
  ]

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined{
    return this.users.find(user => user.id === id);
  }
}
