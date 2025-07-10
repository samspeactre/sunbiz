import { Component, HostBinding, OnInit  } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent implements OnInit{
  isDarkTheme = false;

  ngOnInit(): void {
    // Check if dark theme is enabled in local storage
    const darkThemeEnabled = localStorage.getItem('darkThemeEnabled');
    this.isDarkTheme = darkThemeEnabled === 'true';

    // Update the theme based on the current setting
    this.updateTheme();
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    // Update local storage to remember the user's preference
    localStorage.setItem('darkThemeEnabled', this.isDarkTheme ? 'true' : 'false');
    this.updateTheme();
  }

  private updateTheme(): void {
    const theme = this.isDarkTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }
}
