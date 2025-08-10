
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService, ThemeMode } from '../../services/theme.service';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.scss'
})
export class TopMenu {
  dropdownOpen = false;
  storeOpen = true;
  // URL da foto de perfil. Deixe null para mostrar o ícone padrão.
  profileUrl: string | null = null;
  theme: ThemeMode = 'light';

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.current;
    this.themeService.theme$.subscribe((mode) => (this.theme = mode));
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onAvatarError() {
    // Se a imagem falhar ao carregar, faz fallback para o ícone
    this.profileUrl = null;
  }

  toggleTheme() {
    this.themeService.toggle();
  }
}
