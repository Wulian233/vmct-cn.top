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
    ['meta', { property: 'og:url', content: 'https://beta.vmct-cn.top/' }]
  ],

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/modpacks/': { base: '/modpacks/', items: sidebarModpacks() },
      '/tw/map/': { base: '/tw/map/', items: sidebarMap() },
      '/tw/': { base: '/tw/map/', items: sidebar() }
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
      link: 'https://vmct-cn.top/jian/',
      activeMatch: 'https://vmct-cn.top/jian/'
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

function sidebarModpacks(){
  return [
    { text: '返回首頁', base: '/', link: 'tw' },
    { text: '地圖漢化', base: '/', link: 'tw/map' },
    { text: '地圖漢化準則', base: '/', link: 'tw/rule' },
    { text: '双十一事变', base: '/', link: 'what' },
    {
      text: '整合包汉化',
      collapsed: false,
      items: [
        { text: '奥术学院', link: 'arcanum' },
        { text: '蜜蜂空岛2', link: 'bee' },
        { text: '更好的空岛', link: 'bettermc' },
        { text: '黑石世界', link: 'black' },
        { text: 'Bliss', link: 'bliss' },
        { text: '洞穴城', link: 'cave' },
        { text: '春晓之巫', link: 'cottage' },
        { text: '机械动力：星辰', link: 'create' },
        { text: '破晓之界', link: 'dawn' },
        { text: 'The Decursio Project Expert', link: 'decursio' },
        { text: '幻想领域', link: 'fantasy' },
        { text: '命运时代', link: 'fate' },
        { text: '喂养奇点生存', link: 'feed' },
        { text: '冰雪之域', link: 'frozenopolis' },
        { text: '无限协会', link: 'if' },
        { text: '喷气背包猫', link: 'jetpack' },
        { text: '永恒的MC', link: 'mce' },
        { text: '中世纪的MC 1.19 Fabric', link: 'mmc' },
        { text: 'Muskteer', link: 'muskteer' },
        { text: '核荒地', link: 'nuclear' },
        { text: '天空奥德赛', link: 'odyssey' },
        { text: 'Prey', link: 'prey' },
        { text: 'Roguelike冒险与地牢（RAD）', link: 'rad' },
        { text: '重生之夜', link: 'rotn' },
        { text: '石头世界3', link: 'sb3' },
        { text: '星辰工厂', link: 'star' },
        { text: '宝藏猎人3', link: 'vault' },
        { text: 'FTB Presents Direwolf20', link: 'wolf' },
      ]
    }
  ]
}

function sidebarMap(){
  return [
    { text: '返回首頁', base: '/', link: 'tw' },
    { text: '整合包漢化', base: '/', link: 'modpacks' },
    { text: '地圖漢化準則', base: '/', link: 'tw/rule' },
    { text: '双十一事变', base: '/', link: 'what' },
    {
      text: '地圖漢化',
      collapsed: false,
      items: [
        { text: '最終悖論', link: 'final' },
        { text: '神界隕落', link: 'divinity' },
        { text: '貝維爾小鎮', link: 'bayville' },
        { text: '死亡競速2', link: 'deathrunner' },
        { text: 'Would You Rather', link: 'wyr' },
        { text: '狂亂之境4', link: 'rc4' },
      ]
    }
  ]
}

function sidebar(){
  return [
    { text: '返回首頁', base: '/', link: 'tw' },
    { text: '整合包漢化', base: '/', link: 'modpacks' },
    { text: '地圖漢化', base: '/', link: 'tw/map' },
    { text: '地圖漢化準則', base: '/', link: 'tw/rule' },
    { text: '双十一事变', base: '/', link: 'what' }
  ]
}