import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qrcode-display',
  standalone: false,
  templateUrl: './qrcode-display.component.html',
  styleUrl: './qrcode-display.component.css'
})
export class QrcodeDisplayComponent {
  @Input() qrData: string = '';
}
