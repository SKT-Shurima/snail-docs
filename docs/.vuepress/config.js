const utils = require('./utils');

module.exports = {
  title: '37.3℃',
  description: '技术博客',
  base: '/',
  lang: 'zh-CN',
  theme: '',
  themeConfig: {
    repo: 'vuejs/vuepress',
    editLinks: true,
    docsDir: '/',
    logo: 'https://vuejs.org/images/logo.png',
    nav: utils.getNavigationMenu('./docs'),
    sidebar: utils.getSidebars('./'),
    // 最后更新时间
    lastUpdated: '上次更新',
    // 作者
    author: '37.3℃'
  },
  plugins: [
    ['vuepress-plugin-auto-sidebar', {}] // 自动生成侧边栏
  ]
};
