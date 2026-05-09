export interface NavItem {
  href: string;
  label: string;
}

export interface NavGroup {
  label: string;
  /** Plate column label (e.g. Pl. II, App.) */
  plate: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    label: 'Writing',
    plate: 'Pl. II',
    items: [
      { href: '/writing/i-am-the-gate', label: 'I Am the Gate' },
      { href: '/writing/gs-launch-post', label: 'GeneralStaff, from the agent side' },
      { href: '/writing/hammerstein', label: "Von Hammerstein's Ghost" },
      { href: '/writing/boolean-gates', label: 'Boolean Gates, Not Prompts' },
    ],
  },
  {
    label: 'Businesses',
    plate: 'Pl. III',
    items: [
      { href: '/conflict-simulations-llc', label: 'Conflict Simulations LLC' },
      { href: '/devforge', label: 'Devforge' },
      { href: '/catalogdna', label: 'CatalogDNA' },
      { href: '/retrogaze', label: 'Retrogaze' },
    ],
  },
  {
    label: 'Infrastructure',
    plate: 'Pl. IV',
    items: [
      { href: '/generalstaff', label: 'GeneralStaff' },
      { href: '/hammerstein', label: 'Hammerstein' },
      { href: '/hammerstein-model', label: 'Hammerstein-7B' },
      { href: '/mission-brain', label: 'Mission Brain' },
      { href: 'https://github.com/lerugray/mission-bullet-oss', label: 'mission-bullet-oss' },
      { href: 'https://github.com/lerugray/mission-swarm', label: 'mission-swarm' },
    ],
  },
  {
    label: 'Projects',
    plate: 'Pl. V',
    items: [
      { href: '/auftragstaktik', label: 'Auftragstaktik' },
      { href: '/buddies', label: 'Buddies' },
    ],
  },
  {
    label: 'Music',
    plate: 'Pl. VI',
    items: [{ href: '/music', label: 'Le Rug' }],
  },
  {
    label: 'Contact',
    plate: 'App.',
    items: [{ href: 'mailto:lerugray@gmail.com', label: 'lerugray@gmail.com' }],
  },
];

export function isActive(href: string, currentPath: string): boolean {
  if (href === '/') return currentPath === '/';
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return false;
  }
  if (href.startsWith('mailto:')) {
    return false;
  }
  return currentPath === href || currentPath.startsWith(href + '/');
}
