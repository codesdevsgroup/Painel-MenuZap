import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { MenuSection } from '../../models/menu-item.interface';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatTooltipModule,
    MatDividerModule
  ],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss'
})
export class SideMenu {
  @Input() isCollapsed = false;
  @Input() sidenavPosition: 'start' | 'end' = 'start';

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleSidenavPosition = new EventEmitter<void>();

  menuSections: MenuSection[] = [];

  constructor(private menuService: MenuService) {
    this.menuSections = this.menuService.getMenu();
  }

  logout() {
    // Lógica de logout aqui
    console.log('Logout clicked');
  }
}
