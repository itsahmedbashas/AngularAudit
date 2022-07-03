import { Injectable } from '@angular/core';
import { UserActivity } from '../models/UserActivity';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuditlogService {
  constructor(private readonly userService: UserService) {}

  trackActivity(userActivity: UserActivity) {
    localStorage.setItem(
      this.userService.getLoggesUser().userId,
      JSON.stringify(userActivity)
    );
  }
}
