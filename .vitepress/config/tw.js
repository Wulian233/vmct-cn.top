import { defineConfig } from 'vitepress'


export const tw = defineConfig({
  lang: 'zh-TW',
  title: 'VM漢化組',
  
  description: 'VM漢化組是一個用愛發電專注於漢化MC整合包與地圖的非盈利組織。我們製作的漢化及相關技術最終目的是使公眾受益，漢化組將尋求高品質永久免費漢化包以造福玩家。漢化組的成立不是為了任何人的私人利益。漢化組產生的所有收益將「不可撤銷的」用於上述目的。',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/vm.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh-TW' }],
    ['meta', { property: 'og:title', content: 'VM漢化組 | 一個用愛發電專注於漢化MC整合包與地圖的非盈利組織' }],
    ['meta', { property: 'og:site_name', content: 'VM漢化組' }],
    ['meta', { property: 'og:image', content: '/img/og_image.png' }],
    ['meta', { property: 'og:url', content: 'https://vmct-cn.top/' }]
  ],

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/tw/map/': { base: '/tw/map/', items: sidebarMap() }
    },

    editLink: {
      pattern: 'https://github.com/Wulian233/vmct-website-beta//edit/main/:path',
      text: '在 GitHub 上編輯此頁面'
    },

    footer: {
      message: '基於 MIT 許可發佈',
      copyright: `版權所有 © 2022-${new Date().getFullYear()} 捂臉`
    },

    docFooter: {
      prev: '上一頁',
      next: '下一頁'
    },

    outline: {
      label: '頁面導航'
    },

    lastUpdated: {
      text: '最後更新於',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多語言',
    returnToTopLabel: '回到頂部',
    sidebarMenuLabel: '選單',
    darkModeSwitchLabel: '主題',
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式'
  }
})

function nav(){
  return [
    {
      text: '網站監控',
      link: '../jian/',
      activeMatch: '../jian/'
    },
    {
      text: '社交媒體',
      items: [
        {
          text: 'Discord',
          link: 'https://discord.gg/SvJM5d9S98'
        },
        {
          text: 'B站官號',
          link: 'https://space.bilibili.com/2085089798'
        }
      ]
    }
  ]
}

function sidebarMap(){
  return [
    {
      text: '地圖漢化',
      collapsed: false,
      items: [
        { text: '最終悖論', link: 'final' },
        { text: '神界隕落', link: 'divinity' },
        { text: '貝維爾小鎮', link: 'bayville' },
        { text: '死亡競速2', link: 'deathrunner' },
      ]
    },
    { text: '返回首頁', base: '/', link: 'tw' },
    { text: '地圖漢化準則', base: '/', link: 'tw/rule' }
  ]
}
