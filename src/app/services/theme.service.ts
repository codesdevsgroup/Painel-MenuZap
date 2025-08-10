import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'theme-mode';
  private readonly themeSubject = new BehaviorSubject<ThemeMode>('light');
  readonly theme$ = this.themeSubject.asObservable();

  init() {
    const saved = (typeof localStorage !== 'undefined' ? localStorage.getItem(this.storageKey) : null) as ThemeMode | null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme: ThemeMode = saved ?? (prefersDark ? 'dark' : 'light');
    this.apply(theme);
  }

  toggle() {
    const next: ThemeMode = this.themeSubject.value === 'dark' ? 'light' : 'dark';
    this.apply(next);
  }

  set(theme: ThemeMode) {
    this.apply(theme);
  }

  get current(): ThemeMode {
    return this.themeSubject.value;
  }

  private apply(theme: ThemeMode) {
    this.themeSubject.next(theme);
    try {
      if (typeof document !== 'undefined') {
        const root = document.documentElement;
        if (theme === 'dark') {
          root.setAttribute('data-theme', 'dark');
        } else {
          root.removeAttribute('data-theme');
        }
      }
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.storageKey, theme);
      }
    } catch {
      // ignore
    }
  }
}
