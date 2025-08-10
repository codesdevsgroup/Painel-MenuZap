export interface MenuItem {
  icon?: string;      // nome de ícone do MatIcon (ligatures)
  svgIcon?: string;   // nome de ícone SVG registrado
  label: string;
  route: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}
