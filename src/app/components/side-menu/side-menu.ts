import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss'
})
export class SideMenu {
  @Input() isCollapsed = false;
  @Input() sidenavPosition: 'start' | 'end' = 'start';

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleSidenavPosition = new EventEmitter<void>();
}
