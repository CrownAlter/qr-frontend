import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { QrCodeComponent } from 'ng-qrcode';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { QrcodeGenerationComponent } from './user/qrcode-generation/qrcode-generation.component';
import { QrcodeDisplayComponent } from './user/qrcode-display/qrcode-display.component';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { QrcodeScannerComponent } from './admin/qrcode-scanner/qrcode-scanner.component';
import {ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    QrcodeGenerationComponent,
    QrcodeDisplayComponent,
    QrcodeScannerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QrCodeComponent,
    FormsModule,
    ZXingScannerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
