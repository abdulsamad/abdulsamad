export const redirects = {
  '/meeting': {
    status: 301,
    destination: 'https://cal.com/abdulsamad-ansari',
  },
  '/meeting/20-min': {
    status: 301,
    destination: 'https://cal.com/abdulsamad-ansari/20-min-intro',
  },
  '/resume': {
    status: 301,
    destination:
      'https://docs.google.com/document/d/1WQmeaF8S1KrQYYNgYjsFaeuyr5zFtKAulfosDsZczic/edit',
  },
  '/linkedin': {
    status: 301,
    destination: 'https://www.linkedin.com/in/abdulsamad-ansari',
  },
  '/github': {
    status: 301,
    destination: 'https://github.com/abdulsamad',
  },
  '/telegram': {
    status: 301,
    destination: 'https://t.me/heyasamad',
  },
  '/twitter': {
    status: 301,
    destination: 'https://twitter.com/AbdulSamadDev',
  },
  '/x': {
    status: 301,
    destination: 'https://x.com/AbdulSamadDev',
  },
  '/instagram': {
    status: 301,
    destination: 'https://instagram.com/heyasamad',
  },
  '/facebook': {
    status: 301,
    destination: 'https://facebook.com/heyasamad',
  },
  '/bluesky': {
    status: 301,
    destination: 'https://bsky.app/profile/abdulsamad.bsky.social',
  },
} as const;
