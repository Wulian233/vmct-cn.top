import { baseHelper } from "../../theme/utils";

import C from "./constants";
import Head from "./head";
import Nav from "./nav";
import Sidebar from "./sidebar";
import Footer from "./footer";
import _404 from "./404";
import UI from "./ui";
import SocialLinks from "./social-links";

import Staff from "./staff";
import Payment from "./payment";

export const zhConfig = {
  titleTemplate: ":title | VM汉化组",
  description: C.META_DESCRIPTION,
  head: Head,
  themeConfig: {
    siteTitle: C.META_TITLE,
    keyword: C.META_KEYWORDS,
    description: C.META_DESCRIPTION,
    image: C.META_IMAGE,
    logo: "/imgs/logo/logo_256.png",

    outlineTitle: "本页目录",
    lastUpdatedText: "更新日期",
    returnToTopLabel: "回到顶部",
    langMenuLabel: "更改语言",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    notFound: _404,
    ui: UI,
    socialLinks: SocialLinks,
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: {
      label: "页面导航",
    },

    staff: Staff,
    payment: Payment,

    nav: baseHelper(Nav, C.LOCAL_BASE),
    sidebar: baseHelper(Sidebar, C.LOCAL_BASE),
    footer: baseHelper(Footer, C.LOCAL_BASE),
  },
};
