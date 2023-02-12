import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'howtolinux',
  description: 'Tweaks for Linux',

  lastUpdated: true,
  cleanUrls: true,

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/credits/': sidebarConfig()
    },

    editLink: {
      pattern: 'https://github.com/themagicalmammal/howtolinux',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/themagicalmammal/howtolinux' }
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/themagicalmammal/howtolinux/blob/master/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2023 <a href="https://github.com/themagicalmammal">Dipan Nanda</a>'
    },
  }
})


function nav() {
  return [
    { text: 'Guide', link: '/guide/installation', activeMatch: '/guide/' },
    { text: 'Credits', link: '/credits/credits', activeMatch: '/credits/' }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Basic',
      collapsed: false,
      items: [
        { text: 'Installation', link: '/guide/installation' },
        { text: 'Post Installation', link: '/guide/postinstallation' },
      ]
    },
    { 
      text: 'Daily Usage',
      collapsed: false,
      items: [
        { text: 'Prefferred Apps', link: '/guide/prefferredapps' },
      ]
    },
    { 
      text: 'Tweaks',
      collapsed: false,
      items: [
        { text: 'Important Tweaks', link: '/guide/importanttweaks' },
        { text: 'Optimize Boot', link: '/guide/optimizeboot' },
      ]
    },
    { 
      text: 'Others',
      collapsed: false,
      items: [
        { text: 'Miscellaneous', link: '/guide/miscellaneous' },
      ]
    }
  ]
}

function sidebarConfig() {
  return [
    {
      items: [
        { text: 'Credits', link: '/credits/credits' },
      ]
    }
  ]
}