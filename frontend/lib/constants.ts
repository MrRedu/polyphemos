const { env } = process

export const ENVIRONMENT = env.NODE_ENV
export const API_BASE_URL = env.API_BASE_URL || 'http://localhost:1337'
export const API_MEDIA_BASE_URL =
  env.API_MEDIA_BASE_URL || 'http://localhost:1337'

export const FOOTER_LINKS = [
  {
    label: 'Inicio',
    href: '/',
  },
  // {
  //   label: 'About',
  //   href: '#',
  // },
  {
    label: 'Gestión',
    href: '/sign-in',
  },
  {
    label: 'Contacto',
    href: 'https://www.linkedin.com/in/mrredu/',
    target: '_blank',
  },
  {
    label: 'Políticas de privacidad',
    href: '#',
  },
]

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
]

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
]
