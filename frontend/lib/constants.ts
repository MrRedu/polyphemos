export const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:1337';

export const FOOTER_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'Contact',
    href: '#',
  },
  {
    label: 'Privacy',
    href: '#',
  },
];

export const NAV_LABELS = [
  {
    label: 'Desarrollo',
    href: '?label=Desarrollo',
  },
  {
    label: 'Diseño',
    href: '?label=Diseño',
  },
  {
    label: 'IA',
    href: '?label=IA',
  },
];

export const DASHBOARD_OPTIONS = [
  {
    name: 'Users',
    url: '/dashboard/users',
  },
  {
    name: 'Articles',
    url: '/dashboard/articles',
  },
  {
    name: 'Algo',
    url: '/dashboard/algo',
  },
  {
    name: 'Otro',
    url: '/dashboard/otro',
  },
];
