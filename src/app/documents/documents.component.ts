import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  items = [
    { header: 'Subscriptions', bodies: ['Order 1', 'Order 2', 'Order 3', 'Order 4'] },
    { header: 'Subscriptions', bodies: ['Order 1', 'Order 2', 'Order 3', 'Order 4'] },
    { header: 'Subscriptions', bodies: ['Order 1', 'Order 2', 'Order 3', 'Order 4'] },
    // Add more items as needed
];
expandedIndex = 0; // Set the index of the accordion you want to be open by default

trackFn(index: number, item: any): any {
    return item.id; // Ensure to provide a unique identifier for each item
}

  tableData = [
    { order: 'Registered agent (My 1st LLC)', date: '01/01/2024', status: 'Open',},
    { order: 'Registered agent (My 2nd LLC)', date: '11/01/2024', status: 'Open',},
    { order: 'Registered agent (Annual Report)', date: '09/01/2024', status: 'Open',},
    { order: 'Operating Agreement', date: '02/01/2024', status: 'Open',},
    // Add more data as needed
  ];
}
