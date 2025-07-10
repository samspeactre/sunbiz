import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent {

  tableData = [
    { date: '01/01/2024', desc: 'Registered Agent Service', subs: 'XYZ LLC', amount: '$134.00', balance: '$0.00' },
    { date: '11/01/2024', desc: '', subs: '', amount: '$34.00', balance: '' },
    { date: '09/01/2024', desc: '', subs: '', amount: '$49.00', balance: '' },
    { date: '02/01/2024', desc: '', subs: '', amount: '$99.00', balance: '' },
    // Add more data as needed
  ];

  constructor() { }

  generatePDF(): void {
    const doc = new jsPDF();
    let yPos = 10;
    const margin = 10;

    // Calculate logo width in points based on viewport width
    const vw = window.innerWidth;
    const logoWidthInPoints = (0.8 / 100) * vw;

    // Add company logo
    const logo = new Image();
    logo.src = ' ../../assets/img/logo-vec.png'; // Replace 'path_to_your_logo.png' with the actual path to your logo image
    doc.addImage(logo, 'PNG', margin, yPos, logoWidthInPoints, logoWidthInPoints); // Use calculated logo width
    const logoWidth = logoWidthInPoints; // Set logoWidth to the calculated width

    // Add company name
    const companyName = 'Sunbiz';
    const pageWidth = doc.internal.pageSize.width;
    doc.setFont('helvetica', 'bold'); // Set font style to bold
    doc.setFontSize(20);
    doc.text(companyName, margin, yPos + logoWidth + 8); // Align the company name to the left below the logo

    yPos += logoWidth + 20; // Adjust vertical position for the title

    // Add title to PDF
    doc.setFontSize(20); // Set font size for the title
    doc.text('Account Invoice', margin, yPos);
    yPos += 10;

    // Add current date
    const currentDate = new Date().toLocaleDateString();
    const dateWidth = doc.getTextWidth('Date: ' + currentDate); // Calculate width of the date text
    doc.setFontSize(10); // Set font size for the date
    doc.text('Date: ' + currentDate, margin, yPos); // Align date text to the left
    yPos += 10;

    // Add table headers
    const headers = ['Date', 'Description', 'Subscription', 'Amount', 'Balance'];
    const tableData = this.tableData.map(item => [item.date, item.desc, item.subs, item.amount, item.balance]);

    // Define styles for table header
    const headStyles = {
      fillColor: [0, 0, 0, 1], // Grey color
      textColor: [255, 255, 255] // White text color
    };

    // Add table to PDF
    (doc as any).autoTable({
      startY: yPos,
      head: [headers],
      body: tableData,
      margin: { top: 10 }, // Add margin to the table
      headStyles: headStyles // Apply styles to table header
    });

    // Save PDF
    doc.save('account-invoice.pdf');
  }

}
