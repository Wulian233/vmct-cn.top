import { baseHelper } from '../../theme/utils'

import C from './constants'
import Head from './head'
import Nav from './nav'
import Sidebar from './sidebar'
import Footer from './footer'
import _404 from './404'
import UI from './ui'
import SocialLinks from './social-links'

import Staff from './staff'
import Payment from './payment'

export const twConfig = {
  titleTemplate: ':title | VM翻譯組',
  description: C.META_DESCRIPTION,
  head: Head,
  themeConfig: {
    siteTitle: C.META_TITLE,
    keyword: C.META_KEYWORDS,
    description: C.META_DESCRIPTION,
    image: C.META_IMAGE,
    logo: '/imgs/logo/logo_256.png',

    outlineTitle: '本頁目錄',
    lastUpdatedText: '最後更新於',
    returnToTopLabel: '回到頂部',
    langMenuLabel: '更改語言',
    sidebarMenuLabel: '菜單',
    darkModeSwitchLabel: '主題',
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式',
    notFound: _404,
    ui: UI,
    socialLinks: SocialLinks,
    docFooter: {
      prev: '上一頁',
      next: '下一頁',
    },
    outline: {
      label: '頁面導覽'
    },



    staff: Staff,
    payment: Payment,

    nav: baseHelper(Nav, C.LOCAL_BASE),
    sidebar: baseHelper(Sidebar, C.LOCAL_BASE),
    footer: baseHelper(Footer, C.LOCAL_BASE),
  },
}
