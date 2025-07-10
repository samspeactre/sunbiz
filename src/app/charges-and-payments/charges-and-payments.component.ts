import { Component, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-charges-and-payments',
  templateUrl: './charges-and-payments.component.html',
  styleUrls: ['./charges-and-payments.component.css']
})
export class ChargesAndPaymentsComponent {
  @ViewChild('subsTable', { static: true }) subsTable!: ElementRef;

  tableData = [
    { date: '01/01/2024', order: '123456', description: 'Registered Agent Service', stateFee: '$134.00', balance: '$0.00' },
    { date: '11/01/2024', order: '889977', description: 'Refund: Overpayment', stateFee: '-$34.00', balance: '' },
    { date: '09/01/2024', order: '101010', description: 'Operating Agreement', stateFee: '$49.00', balance: '' },
    { date: '02/01/2024', order: '098745', description: 'Annual Report', stateFee: '$99.00', balance: '' },
    // Add more data as needed
  ];

  generatePDF(): void {
    const doc = new jsPDF();
    let yPos = 10;
    const margin = 10;

    // Add company logo
    const logo = new Image();
    logo.src = ' ../../assets/img/logo-vec.png';
    const logoWidthInPoints = 23; // Adjust the logo width as needed
    const logoHeightInPoints = 12; // Adjust the logo height as needed

    // Add company name and logo
    const companyName = 'Sunbiz';
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text(companyName, margin, yPos + logoHeightInPoints + 8);
    doc.addImage(logo, 'PNG', margin, yPos, logoWidthInPoints, logoHeightInPoints);
    yPos += logoHeightInPoints + 20;

    // Add title and date
    doc.setFontSize(20);
    doc.text('Order Invoice', margin, yPos);
    yPos += 10;
    const currentDate = new Date().toLocaleDateString();
    doc.setFontSize(10);
    doc.text('Date: ' + currentDate, margin, yPos);
    yPos += 10;

    // Add table headers
    const headers = ['Date', 'Order', 'Description', 'State Fees', 'Balance'];
    const tableData = this.tableData.map(item => [item.date, item.order, item.description, item.stateFee, item.balance]);

    // Add table to PDF
    (doc as any).autoTable({
      startY: yPos,
      head: [headers],
      body: tableData,
      margin: { top: 10 },
      styles: { textColor: [0, 0, 0], lineColor: [0, 0, 0] },
      columnStyles: { 0: { cellWidth: 30 }, 1: { cellWidth: 30 }, 2: { cellWidth: 60 }, 3: { cellWidth: 30 }, 4: { cellWidth: 30 } }
    });

    // Add signature image
    const signature = new Image();
    signature.src = ' ../../assets/img/sign.png';
    const signatureWidthInPoints = 30; // Adjust the signature width as needed
    const signatureHeightInPoints = 10; // Adjust the signature height as needed
    doc.addImage(signature, 'PNG', doc.internal.pageSize.width - margin - signatureWidthInPoints, doc.internal.pageSize.height - margin - signatureHeightInPoints, signatureWidthInPoints, signatureHeightInPoints);

    // Save PDF
    doc.save('order-invoice.pdf');
  }

}
