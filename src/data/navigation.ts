export interface NavItem {
  href: string;
  label: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    label: 'Writing',
    items: [{ href: '/writing/hammerstein', label: "Von Hammerstein's Ghost" }],
  },
  {
    label: 'Businesses',
    items: [
      { href: '/conflict-simulations-llc', label: 'Conflict Simulations LLC' },
      { href: '/devforge', label: 'Devforge' },
      { href: '/catalogdna', label: 'CatalogDNA' },
      { href: '/retrogaze', label: 'Retrogaze' },
    ],
  },
  {
    label: 'Infrastructure',
    items: [
      { href: '/generalstaff', label: 'GeneralStaff' },
      { href: '/raybrain', label: 'RayBrain' },
    ],
  },
  {
    label: 'Projects',
    items: [
      { href: '/auftragstaktik', label: 'Auftragstaktik' },
      { href: '/buddies', label: 'Buddies' },
    ],
  },
  {
    label: 'Music',
    items: [{ href: '/music', label: 'Le Rug' }],
  },
];

export function isActive(href: string, currentPath: string): boolean {
  if (href === '/') return currentPath === '/';
  return currentPath === href || currentPath.startsWith(href + '/');
}
