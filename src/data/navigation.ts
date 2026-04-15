export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/conflict-simulations-llc', label: 'Conflict Simulations LLC' },
  { href: '/catalogdna', label: 'CatalogDNA' },
  { href: '/retrogaze', label: 'Retrogaze' },
  { href: '/devforge', label: 'Devforge' },
  { href: '/auftragstaktik', label: 'Auftragstaktik' },
  { href: '/buddies', label: 'Buddies' },
  { href: '/music', label: 'Music' },
  { href: '#contact', label: 'Contact' },
];

export function isActive(href: string, currentPath: string): boolean {
  if (href === '/') return currentPath === '/';
  if (href.startsWith('#')) return false;
  return currentPath === href || currentPath.startsWith(href + '/');
}
