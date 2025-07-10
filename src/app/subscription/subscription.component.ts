import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {
  tableData = [
    { order: 'Registered agent (My 1st LLC)', do: '01/01/2024', dc: '01/01/2024', status: 'Completed', revise: 'Revise' },
    { order: 'Registered agent (My 2nd LLC)', do: '11/01/2024', dc: '11/01/2024', status: 'In Process', revise: 'Revise' },
    { order: 'Registered agent (Annual Report)', do: '09/01/2024', dc: '09/01/2024', status: 'Problem', revise: 'Revise' },
    // Add more data as needed
  ];
}
