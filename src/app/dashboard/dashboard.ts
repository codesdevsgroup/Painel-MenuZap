import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { SideMenu } from '../components/side-menu/side-menu';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    SideMenu
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  isCollapsed = false;
  sidenavPosition: 'start' | 'end' = 'start';

  ngOnInit() {
    const collapsed = localStorage.getItem('isCollapsed');
    if (collapsed) {
      this.isCollapsed = JSON.parse(collapsed);
    }

    const position = localStorage.getItem('sidenavPosition') as 'start' | 'end';
    if (position) {
      this.sidenavPosition = position;
    }
  }

  toggleSidenav() {
    this.isCollapsed = !this.isCollapsed;
    localStorage.setItem('isCollapsed', JSON.stringify(this.isCollapsed));
  }

  toggleSidenavPosition() {
    this.sidenavPosition = this.sidenavPosition === 'start' ? 'end' : 'start';
    localStorage.setItem('sidenavPosition', this.sidenavPosition);
  }
}
