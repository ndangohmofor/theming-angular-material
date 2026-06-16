import { computed, Injectable, signal } from '@angular/core';
import { THEME_COLORS } from '../models/theme-colors.model';
import { THEME_SCHEMES } from '../models/theme-scheme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly possibleColors = THEME_COLORS;
  readonly possibleSchemes = THEME_SCHEMES;

  readonly #selectedColor = signal(this.possibleColors[0]);
  readonly #selectedScheme = signal(this.possibleSchemes[0]);

  readonly selectedColor = this.#selectedColor.asReadonly();
  readonly selectedScheme = this.#selectedScheme.asReadonly();

  readonly #primary = computed(() => this.selectedColor().primary);
  readonly #accent = computed(() => this.selectedColor().accent);
  readonly #scheme = computed(() => this.selectedScheme().value);

  setColor(name: string) {
    const item = this.possibleColors.find((item) => item.name === name);
    if (item) {
      this.#selectedColor.set(item);
    }
  }

  setScheme(name: string) {
    const item = this.possibleSchemes.find((item) => item.name === name);
    if (item) {
      this.#selectedScheme.set(item);
    }
  }

  constructor() {}
}
