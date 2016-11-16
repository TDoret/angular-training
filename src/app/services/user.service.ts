import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { USERS } from '../services/mock-users';

@Injectable()
export class UserService {
  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }
  constructor() { }

}
