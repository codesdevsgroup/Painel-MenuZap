
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-menu',
  imports: [CommonModule, FormsModule],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.scss'
})
export class TopMenu {
  dropdownOpen = false;
  storeOpen = true;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
