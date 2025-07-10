import { Component } from '@angular/core';

@Component({
  selector: 'app-question-request',
  templateUrl: './question-request.component.html',
  styleUrls: ['./question-request.component.css']
})
export class QuestionRequestComponent {
  selectedFile: File | null = null;
  commentText: string = '';

  selectFile(): void {
    document.getElementById('fileInput')?.click();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  cancelFile(): void {
    this.selectedFile = null;
    // Reset file input field if needed
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Construct form data to submit
    const formData = new FormData();
    formData.append('comment', this.commentText);
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    // Example: Send form data to a backend API using Angular's HttpClient
    // Replace the URL with your actual backend API endpoint
    /*
    this.httpClient.post<any>('https://example.com/your-api-endpoint', formData).subscribe(
      response => {
        console.log('Form submission successful:', response);
        // Optionally, reset form fields after successful submission
        this.commentText = '';
        this.selectedFile = null;
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if (fileInput) {
          fileInput.value = '';
        }
      },
      error => {
        console.error('Error submitting form:', error);
      }
    );
    */

    // For demonstration purposes, I'm logging the form data to console
    console.log('Form data:', formData);

    // Optionally, reset form fields after logging form data
    this.commentText = '';
    this.selectedFile = null;
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }
}
