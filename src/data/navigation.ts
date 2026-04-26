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
    items: [
      { href: '/writing/hammerstein', label: "Von Hammerstein's Ghost" },
      { href: '/writing/boolean-gates', label: 'Boolean Gates, Not Prompts' },
    ],
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
      { href: '/mission-brain', label: 'Mission Brain' },
      { href: 'https://github.com/lerugray/mission-bullet-oss', label: 'mission-bullet-oss' },
      { href: 'https://github.com/lerugray/mission-swarm', label: 'mission-swarm' },
      { href: 'https://github.com/lerugray/mission-chess', label: 'mission-chess' },
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
