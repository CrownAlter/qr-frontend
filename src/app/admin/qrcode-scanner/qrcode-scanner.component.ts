import { Component } from '@angular/core';

@Component({
  selector: 'app-qrcode-scanner',
  standalone: false,
  templateUrl: './qrcode-scanner.component.html',
  styleUrl: './qrcode-scanner.component.css'
})
export class QrcodeScannerComponent {
  scannedResult: string = '';

  onCodeScanned(result: string) {
    this.scannedResult = result;
    console.log('Scanned:', result);
  }
}
