import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Novi',
  description: 'A novel way to navigate anything',
  head: [
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicons/apple-touch-icon.png' }
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicons/favicon-32x32.png' }
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/favicons/favicon-16x16.png' }
    ],
    ['link', { rel: 'manifest', href: '/assets/favicons/site.webmanifest' }],
    [
      'link',
      { rel: 'mask-icon', href: '/assets/favicons/safari-pinned-tab.svg', color: '#3a0839' }
    ],
    ['link', { rel: 'shortcut icon', href: '/assets/favicons/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#b37ff3' }],
    ['meta', { name: 'msapplication-config', content: '/assets/favicons/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/logo.svg',
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Novi?', link: '/intro/what-is-novi' },
          { text: 'Get Started', link: '/intro/get-started' }
        ]
      },
      {
        text: 'Concepts',
        link: '/concepts',
        items: [
          { text: 'Object and Tags', link: '/concepts/object-and-tag' },
          { text: 'Filter', link: '/concepts/filter' },
          { text: 'Subscribe', link: '/concepts/subscribe' },
          { text: 'Imply Rules', link: '/concepts/imply' },
          { text: 'Hook', link: '/concepts/hook' },
          { text: 'Permission', link: '/concepts/permission' },
          { text: 'Session', link: '/concepts/session' }
        ]
      },
      {
        items: [{ text: 'Contributing', link: '/contributing' }]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/project-novi/novi' }]
  }
});
