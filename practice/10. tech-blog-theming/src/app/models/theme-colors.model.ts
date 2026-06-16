export interface ThemeColors {
  readonly name: string;
  readonly primary: string;
  readonly accent: string;
}

export const THEME_COLORS: ThemeColors[] = [
  { primary: 'blue', accent: 'pink', name: 'Blue & Pink' },
  { primary: 'purple', accent: 'orange', name: 'Purple & Orange' },
  { primary: 'green', accent: 'brown', name: 'Green & Brown' },
  { primary: 'red', accent: 'cyan', name: 'Red & Cyan' },
];
