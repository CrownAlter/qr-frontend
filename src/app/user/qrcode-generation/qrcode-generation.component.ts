import { Component, Input, OnInit } from '@angular/core';

import { UserService } from '../user.service';// Import UserService

@Component({
  selector: 'app-qrcode-generation',
  standalone: false,
  templateUrl: './qrcode-generation.component.html',
  styleUrls: ['./qrcode-generation.component.css']
})
export class QrcodeGenerationComponent implements OnInit {
  @Input() userId: number = 4;  // Make sure this is provided dynamically
  qrValue: string = '';

  constructor(private userService: UserService) {} // Use UserService

  ngOnInit() {
    this.generateQRCode();
  }

  generateQRCode() {
    this.userService.getUserDetails(this.userId).subscribe(
      (data) => {
        if (data) {
          const timestamp = new Date().toISOString();
          this.qrValue = JSON.stringify({
            id: data.id,
            name: data.name,
            email: data.email,
            time: timestamp
          });
        } else {
          console.error('User not found');
        }
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
}
