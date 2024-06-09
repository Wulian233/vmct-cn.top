import { defineConfig } from 'vitepress'


export const tw = defineConfig({
  lang: 'zh-TW',
  title: 'VM翻譯組',
  
  description: 'VM翻譯組是一個用愛發電專門於翻譯MC模組包與地圖的非盈利組織。我們製作的翻譯及相關技術最終目的是使公眾受益，翻譯組將追求高品質永久免費翻譯包以造福玩家。翻譯組的成立不是為了任何人的私人利益。翻譯組產生的所有收益將「不可回復地」用於上開目的。',

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/vm.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh-TW' }],
    ['meta', { property: 'og:title', content: 'VM翻譯組 | 一個用愛發電專注於翻譯MC模組包與地圖的非盈利組織' }],
    ['meta', { property: 'og:site_name', content: 'VM翻譯組' }],
    ['meta', { property: 'og:image', content: '/img/og_image.png' }],
    ['meta', { property: 'og:url', content: 'https://beta.vmct-cn.top/' }]
  ],

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/modpacks/': { base: '/modpacks/', items: sidebarModpacks() },
      '/tw/map/': { base: '/tw/map/', items: sidebarMap() },
      '/tw/others/vmtu/': { base: '/tw/others/vmtu/', items: sidebarVMTU() },
      '/tw/': { base: '/tw/map/', items: sidebar() }
    },

    editLink: {
      pattern: 'https://github.com/Wulian233/vmct-website-beta/edit/main/:path',
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
      label: '頁面導覽'
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
      text: '網站監視',
      link: 'https://vmct-cn.top/jian/',
      activeMatch: 'https://vmct-cn.top/jian/'
    },
    {
      text: '社群媒體',
      items: [
        {
          text: 'Discord',
          link: 'https://discord.gg/SvJM5d9S98'
        },
        {
          text: 'bilibili官方帳號',
          link: 'https://space.bilibili.com/2085089798'
        }
      ]
    }
  ]
}

function sidebarModpacks(){
  return [
    { text: '返回首頁', base: '/', link: 'tw' },
    { text: '地圖翻譯', base: '/', link: 'tw/map' },
    { text: '地圖翻譯準則', base: '/', link: 'tw/others/rule' },
    { text: '雙十一事變', base: '/', link: 'what' },
    { text: '使用條款', base: '/', link: 'tw/others/terms' },
    {
      text: '模組包翻譯',
      collapsed: false,
      items: [
        { text: '奧術學院', link: 'arcanum' },
        { text: '蜜蜂空島2', link: 'bee' },
        { text: '空島升級', link: 'bettermc' },
        { text: '黑石世界', link: 'black' },
        { text: 'Bliss', link: 'bliss' },
        { text: '洞穴城', link: 'cave' },
        { text: '春曉之巫', link: 'cottage' },
        { text: '機械動力：星辰', link: 'create' },
        { text: '破曉之界', link: 'dawn' },
        { text: 'The Decursio Project Expert', link: 'decursio' },
        { text: '幻想領域', link: 'fantasy' },
        { text: '飼養奇異點生存', link: 'feed' },
        { text: '冰雪之域', link: 'frozenopolis' },
        { text: '無限協會', link: 'if' },
        { text: '地狱起源', link: 'infernal' },
        { text: '噴氣背包貓', link: 'jetpack' },
        { text: '永恆的MC', link: 'mce' },
        { text: '中世纪的MC 1.19 Fabric', link: 'mmc' },
        { text: 'Muskteer', link: 'muskteer' },
        { text: '核荒地', link: 'nuclear' },
        { text: '天空奧德賽', link: 'odyssey' },
        { text: 'FTB建築師天堂2', link: 'paradise2' },
        { text: 'Prey', link: 'prey' },
        { text: 'Roguelike冒險與地牢（RAD）', link: 'rad' },
        { text: '重生之夜', link: 'rotn' },
        { text: '石頭世界3', link: 'sb3' },
        { text: '星辰工廠', link: 'star' },
        { text: '寶藏獵人3', link: 'vault' },
        { text: 'FTB Presents Direwolf20', link: 'wolf' },
      ]
    }
  ]
}

function sidebarMap(){
  return [
    { text: '返回首頁', base: '/', link: 'tw' },
    { text: '模組包翻譯', base: '/', link: 'modpacks' },
    { text: '地圖翻譯準則', base: '/', link: 'tw/others/rule' },
    { text: '雙十一事變', base: '/', link: 'what' },
    { text: '使用條款', base: '/', link: 'tw/others/terms' },
    {
      text: '地圖翻譯',
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

function sidebarVMTU(){
  return [
    { text: 'VM翻譯組', base: '/', link: 'index' },
    {
      text: '入門',
      collapsed: false,
      items: [
        { text: '功能介紹', base: '/', link: 'others/vmtu/' },
        { text: '使用與設定檔', base: '/', link: 'others/vmtu/config' },
        { text: '支援版本', base: '/', link: 'others/vmtu/support' },
      ]
    }
  ]
}

function sidebar(){
  return [
    { text: '返回首頁', base: '/', link: 'tw' },
    { text: '模組包翻譯', base: '/', link: 'modpacks' },
    { text: '地圖翻譯', base: '/', link: 'tw/map' },
    { text: '地圖翻譯準則', base: '/', link: 'tw/others/rule' },
    { text: '雙十一事變', base: '/', link: 'what' },
    { text: '使用條款', base: '/', link: 'tw/others/terms' },
  ]
}