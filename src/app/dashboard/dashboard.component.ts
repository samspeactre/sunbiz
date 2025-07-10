import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cards = [
    { imageUrl: '../../assets/img/dash-order.png', title: 'Orders', redirectUrl: '/payments' },
    { imageUrl: '../../assets/img/dash-communication.png', title: 'Communication Center', redirectUrl: '' },
    { imageUrl: '../../assets/img/dash-document.png', title: 'Documents', redirectUrl: '/documents' },
    { imageUrl: '../../assets/img/dash-accounting.png', title: 'Accounting', redirectUrl: '/accounting' },
    { imageUrl: '../../assets/img/dash-portal.png', title: 'Registered Agent Portal', redirectUrl: '/portal' },
    { imageUrl: '../../assets/img/dash-setting.png', title: 'Settings', redirectUrl: '/setting' },
  ];
}
