
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
  // URL da foto de perfil. Deixe null para mostrar o ícone padrão.
  profileUrl: string | null = null;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onAvatarError() {
    // Se a imagem falhar ao carregar, faz fallback para o ícone
    this.profileUrl = null;
  }
}
