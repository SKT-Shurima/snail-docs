const moment = require('moment');
const utils = require('./utils');

module.exports = {
  title: '37.3℃',
  description: '技术博客',
  base: '/',
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
  lang: 'zh-CN',
  theme: '',
  themeConfig: {
    repo: 'vuejs/vuepress',
    editLinks: true,
    docsDir: '/',
    logo: './public/images/logo.jpg',
    nav: utils.getNavigationMenu('./docs'),
    sidebar: utils.getSidebars('./'),
    // 最后更新时间
    lastUpdated: '上次更新',
    // 作者
    author: '37.3℃'
  },
  plugins: [
    // 返回顶部按钮true显示、false不显示
    ['@vuepress/back-to-top', true],
    ['vuepress-plugin-auto-sidebar', {}], // 自动生成侧边栏
    // https://github.com/znicholasbrown/vuepress-plugin-code-copy
    ['vuepress-plugin-code-copy', true],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          moment.locale(lang);
          return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
        }
      }
    ]
  ]
};
