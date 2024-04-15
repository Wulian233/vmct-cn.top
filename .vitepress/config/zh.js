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
    ['meta', { property: 'og:url', content: 'https://beta.vmct-cn.top/' }]
  ],

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/modpacks/': { base: '/modpacks/', items: sidebarModpacks() },
      '/map/': { base: '/map/', items: sidebarMap() },
      '/': { base: '/', items: sidebar() }
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
      link: 'https://vmct-cn.top/api/',
      activeMatch: 'https://vmct-cn.top/api/'
    },
    {
      text: '网站监控',
      link: 'https://vmct-cn.top/jian/',
      activeMatch: 'https://vmct-cn.top/jian/'
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

function sidebarModpacks(){
  return [
    { text: '返回首页', base: '/', link: 'index' },
    { text: '地图汉化', base: '/', link: 'map' },
    { text: '地图汉化准则', base: '/', link: 'rule' },
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
    { text: '返回首页', base: '/', link: 'index' },
    { text: '整合包汉化', base: '/', link: 'modpacks' },
    { text: '地图汉化准则', base: '/', link: 'rule' },
    { text: '双十一事变', base: '/', link: 'what' },
    {
      text: '地图汉化',
      collapsed: false,
      items: [
        { text: '最终悖论', link: 'final' },
        { text: '神界陨落', link: 'divinity' },
        { text: '贝维尔小镇', link: 'bayville' },
        { text: '死亡竞速2', link: 'deathrunner' },
        { text: 'Would You Rather', link: 'wyr' },
        { text: '狂乱之境4', link: 'rc4' },
      ]
    }
  ]
}

function sidebar(){
  return [
    { text: '返回首页', base: '/', link: 'index' },
    { text: '整合包汉化', base: '/', link: 'modpacks' },
    { text: '地图汉化', base: '/', link: 'map' },
    { text: '地图汉化准则', base: '/', link: 'rule' },
    { text: '双十一事变', base: '/', link: 'what' }
  ]
}