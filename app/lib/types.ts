// Tipos TypeScript para mejorar la escalabilidad del proyecto

export interface Post {
  id: number;
  title: string;
  href: string;
  description: string;
  category: string;
  imageUrl: string;
  alt: string;
  date: string;
  datetime: string;
  author: {
    name: string;
    imageUrl: string;
    href?: string;
  };
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: 'github' | 'linkedin';
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  authorImage: string;
  githubUrl: string;
  siteUrl: string;
}

export const POST_CATEGORIES = {
  'Next.js': 'Next.js',
  'VSC': 'VSC',
  'ChatGPT': 'ChatGPT',
  'Google': 'Google',
  'Otros': 'Otros',
  'Diseño': 'Diseño',
  'Python': 'Python'
} as const;

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/lara-alonso-portfolio' }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/Aiadevop/',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/lara-alonso',
    icon: 'linkedin'
  }
];

export const SITE_CONFIG: SiteConfig = {
  title: 'Lara Alonso @aiadevop lara-alonso',
  description: 'Lara Alonso lara-alonso @aiadevop | Frontend Developer Portfolio Blog',
  author: 'Lara Alonso',
  authorImage: '/img/profileIcon.jpg',
  githubUrl: 'https://github.com/Aiadevop/',
  siteUrl: 'https://lara-alonso.com'
};
