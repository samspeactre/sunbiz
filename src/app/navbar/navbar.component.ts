import { Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  notificationDropdownActive = false;
  profileDropdownActive = false;

  toggleNotificationDropdown() {
    this.notificationDropdownActive = !this.notificationDropdownActive;
    // Close profile dropdown if open
    this.profileDropdownActive = false;
  }

  toggleProfileDropdown() {
    this.profileDropdownActive = !this.profileDropdownActive;
    // Close notification dropdown if open
    this.notificationDropdownActive = false;
  }
}
