import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { UserActivity } from 'src/app/models/UserActivity';
import { AuditlogService } from 'src/app/services/auditlog.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  constructor(
    private readonly userService: UserService,
    private readonly auditLog: AuditlogService
  ) {}

  ngOnInit(): void {
    //alert(this.userService.getLoggesUser().userId);
    // 1 sec = 1000
    const source = interval(100000);
    const text = 'Your Text Here';
    this.subscription = source.subscribe((val) =>
      this.checkLocalStorageItems()
    );
  }

  onHit(nav: any) {
    const activity: UserActivity = {
      userId: this.userService.getLoggesUser().userId,
      actionItem: `Clicked on ${nav}`,
      timeStamp: new Date().toString(),
    };
    this.auditLog.trackActivity(activity);
  }

  checkLocalStorageItems() {
    alert('checking localstorage items');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
