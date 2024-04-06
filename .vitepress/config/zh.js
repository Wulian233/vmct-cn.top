import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  title: 'VM汉化组',
  
  description: 'VM汉化组是一个用爱发电专注于汉化MC整合包与地图的非盈利组织。我们制作的汉化及相关技术最终目的是使公众受益，汉化组将寻求高质量永久免费汉化包以造福玩家。汉化组的成立不是为了任何人的私人利益。汉化组产生的所有收益将“不可撤销的”用于上述目的。',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/vm.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh-CN' }],
    ['meta', { property: 'og:title', content: 'VM汉化组 | 一个用爱发电专注于汉化MC整合包与地图的非盈利组织' }],
    ['meta', { property: 'og:site_name', content: 'VM汉化组' }],
    ['meta', { property: 'og:image', content: '/img/og_image.png' }],
    ['meta', { property: 'og:url', content: 'https://vmct-cn.top/' }]
  ],

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/map/': { base: '/map/', items: sidebarMap() }
    },

    editLink: {
      pattern: 'https://github.com/Wulian233/vmct-website-beta//edit/main/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2022-${new Date().getFullYear()} 捂脸`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(){
  return [
    {
      text: '爱发电',
      link: '/api/',
      activeMatch: '/api/'
    },
    {
      text: '网站监控',
      link: '/jian/',
      activeMatch: '/jian/'
    },
    {
      text: '社交媒体',
      items: [
        {
          text: 'QQ群',
          link: 'https://qm.qq.com/q/P1qgRl8iw8'
        },
        {
          text: 'B站官号',
          link: 'https://space.bilibili.com/2085089798'
        },
        {
          text: 'KOOK语音',
          link: 'https://kaihei.co/qdbxlF'
        },
        {
          text: 'Discord（各显神通）',
          link: 'https://discord.gg/SvJM5d9S98'
        },
      ]
    }
  ]
}

function sidebarMap(){
  return [
    {
      text: '地图汉化',
      collapsed: false,
      items: [
        { text: '最终悖论', link: 'final' },
        { text: '神界陨落', link: 'divinity' },
        { text: '贝维尔小镇', link: 'bayville' },
      ]
    },
    { text: '返回首页', base: '/', link: 'index' },
    { text: '地图汉化准则', base: '/', link: 'rule' }
  ]
}
