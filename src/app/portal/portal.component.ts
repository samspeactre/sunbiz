import { Component } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css'
})
export class PortalComponent {
  reports = [
    { title: 'Annual Report', date: 'March 15, 2024', url: '' },
    { title: 'Annual Report', date: 'March 15, 2024', url: '' },
    { title: 'Annual Report', date: 'March 15, 2024', url: '' },
  ];

  tableData = [
    { status: 'Open', date: '01/01/2024', desc: 'Annual Report Due',},
    { status: 'Open', date: '11/01/2024', desc: 'Tax Notice ',},
    { status: 'Open', date: '09/01/2024', desc: 'Tax Notice ',},
    // Add more data as needed
  ];

  items = [
    { header: 'Question 1?', bodies: ['Order 1', 'Order 2', 'Order 3', 'Order 4'] },
    { header: 'Question 1?', bodies: ['Order 1', 'Order 2', 'Order 3', 'Order 4'] },
    { header: 'Question 1?', bodies: ['Order 1', 'Order 2', 'Order 3', 'Order 4'] },
    // Add more items as needed
];
expandedIndex = -1; // Set the index of the accordion you want to be open by default

trackFn(index: number, item: any): any {
    return item.id; // Ensure to provide a unique identifier for each item
}
}
