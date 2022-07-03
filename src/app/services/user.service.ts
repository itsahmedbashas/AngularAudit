import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User;
  constructor() {}

  setLoggedUser(user: User) {
    this.user = user;
  }

  getLoggesUser() {
    return this.user;
  }
}
