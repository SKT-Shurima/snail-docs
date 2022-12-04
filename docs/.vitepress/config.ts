import { defineConfig } from "vitepress"
import { version } from '../../package.json'
import { getNavigationMenu, getSidebars } from './utils'

export default defineConfig({
  lang: 'zh-CN',
  title: '37.3°C',
  description: 'Vite & Vue powered static site generator.',
  base:'/snail-docs/',
  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  // 额外的需要被注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/images/logo.jpg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    ['meta', { name: 'msapplication-TileImage', content: '/images/logo.jpg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    [
      'meta',
      {
        name: 'keywords',
        content: `37.3,vue,vuepress,vuepress-theme,theme,主题,vuepress主题,blog
      ,vuepress-blog,java,python,shell,sql,golang,script,shell script,nginx,windows,linux`
      }
    ],
    ['meta', { name: 'referrer', content: 'never' }]
  ],
  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    nav: getNavigationMenu('./docs'),
    logo: '/images/logo.jpg',
    sidebar: getSidebars('./docs'),
    editLink: {
      pattern: 'https://github.com/SKT-Shurima/gitbook/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SKT-Shurima/gitbook' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present SKT-Shurima'
    },

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // }
  }
})
