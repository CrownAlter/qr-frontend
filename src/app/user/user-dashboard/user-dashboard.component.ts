import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  standalone: false,
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  userDetails: any;
  qrGenerated = false;
  recentScans = [
    { date: 'Saturday, 1st March, 2025 11:49am' },
    { date: 'Saturday, 1st March, 2025 11:49am' },
    { date: 'Saturday, 1st March, 2025 11:49am' },
    { date: 'Saturday, 1st March, 2025 11:49am' }
  ];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserDetails(4).subscribe(data => {
      this.userDetails = data;
    });
  }

  generateQRCode() {
    if (this.userDetails) {
      this.qrGenerated = true;
    } else {
      console.error('User details not loaded yet');
    }
  }
}
