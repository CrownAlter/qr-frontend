import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { QrcodeGenerationComponent } from './user/qrcode-generation/qrcode-generation.component';
import { QrcodeDisplayComponent } from './user/qrcode-display/qrcode-display.component';
import { QrcodeScannerComponent } from './admin/qrcode-scanner/qrcode-scanner.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-dashboard', pathMatch: 'full' }, // Default route
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'generate-qr', component: QrcodeGenerationComponent },
  { path: 'display-qr', component: QrcodeDisplayComponent },
  { path: 'scan-qr', component: QrcodeScannerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
