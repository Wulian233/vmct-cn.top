import Unocss from "unocss/vite";
import MarkdownItFootnote from "markdown-it-footnote";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress";
import { colorPreviewPlugin } from "./theme/markdown/colorPreview";
import { cardPlugin } from "./theme/markdown/card";
import { imgSize, obsidianImageSize } from "@mdit/plugin-img-size";
import { spoiler } from "@mdit/plugin-spoiler";
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog/vite";

import { twConfig } from "./locales/tw";
import { zhConfig } from "./locales/zh";

function generateAvatarUrl(username) {
  return `https://github.com/${username}.png`;
}

function getMetaTags(pageUrl, pageTitle, pageDesc, pageKeywords, pageCover) {
  return [
    ["meta", { name: "og:url", content: pageUrl }],
    ["meta", { name: "twitter:url", content: pageUrl }],
    ["meta", { name: "og:title", content: pageTitle }],
    ["meta", { name: "twitter:title", content: pageTitle }],
    ["meta", { name: "og:description", content: pageDesc }],
    ["meta", { name: "twitter:description", content: pageDesc }],
    ["meta", { name: "description", content: pageDesc }],
    ["meta", { name: "keywords", content: pageKeywords }],
    ["meta", { name: "og:image", content: pageCover }],
    ["meta", { name: "twitter:image", content: pageCover }],
  ];
}

function applyDynamicHead(pageData, siteConfig) {
  const pageUrl = `https://vmct-cn.top/${siteConfig.site.base}${pageData.relativePath.replace(".md", "")}`;
  const pageTitle = pageData.frontmatter.title || "VM汉化组";
  const pageDesc =
    pageData.frontmatter.description ||
    `VM汉化组是一个用爱发电专注于汉化MC整合包与地图的非盈利组织。\n我们制作的汉化及相关技术最终目的是使公众受益，将寻求高质量永久免费汉化补丁以造福玩家`;
  const pageKeywords =
    pageData.frontmatter.keywords ||
    "VM汉化组,VM 汉化组,整合包,汉化,整合包汉化,MC汉化,永恒的MC,永恒的MC汉化,石头世界3";
  const pageCover = pageData.frontmatter.image || "/imgs/og_image.png";

  const metaTags = getMetaTags(
    pageUrl,
    pageTitle,
    pageDesc,
    pageKeywords,
    pageCover,
  );

  pageData.frontmatter.head ??= [];
  pageData.frontmatter.head.push(...metaTags);
}

function applyDynamicTitleTemplate(pageData, siteConfig) {
  let titleTemplate =
    pageData.frontmatter.titleTemplate ?? siteConfig.userConfig.titleTemplate;
  if (!titleTemplate) {
    const localeKey = pageData.relativePath.split("/", 1)[0] || "root";
    const localeConfig = siteConfig.userConfig.locales?.[localeKey] ?? {};
    const templateMappings =
      localeConfig.themeConfig?.ui.title.templateMappings ?? [];

    for (let { test, template } of templateMappings) {
      if (test?.test(pageData.relativePath)) {
        titleTemplate = template;
        break;
      }
    }
  }
  pageData.titleTemplate = titleTemplate;
}

function createConfigureFunction() {
  return {
    transformHead: ({ pageData, siteConfig }) =>
      applyDynamicHead(pageData, siteConfig),
    transformPageData: (pageData, { siteConfig }) =>
      applyDynamicTitleTemplate(pageData, siteConfig),
  };
}

export default defineConfig({
  srcDir: "src",
  scrollOffset: "header",
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: "https://vmct-cn.top" },
  themeConfig: {
    editLink: true,
    aside: true,
    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "搜索", buttonAriaLabel: "搜索" },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
        locales: {
          tw: {
            translations: {
              button: { buttonText: "搜索", buttonAriaLabel: "搜索" },
              modal: {
                noResultsText: "無法找到相關結果",
                resetButtonTitle: "清除查詢條件",
                footer: {
                  selectText: "選擇",
                  navigateText: "切換",
                  closeText: "關閉",
                },
              },
            },
          },
        },
      },
    },
  },
  rewrites: { "zh/:splat(.*)": ":splat" },
  locales: {
    root: { label: "简体中文", lang: "zh-CN", link: "/", ...zhConfig },
    tw: { label: "繁體中文", lang: "zh-TW", link: "/tw/", ...twConfig },
  },
  head: [
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,viewport-fit=cover",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "lack-translucent",
      },
    ],
    ["meta", { name: "applicable-device", content: "pc,mobile" }],
    ["meta", { name: "google", content: "notranslate" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["meta", { name: "color-scheme", content: "dark light" }],
    [
      "link",
      {
        rel: "icon",
        href: `/imgs/favicon/favicon-32x32.png`,
        type: "image/png",
      },
    ],
    [
      "link",
      { rel: "alternate", hreflang: "zh", href: "https://vmct-cn.top/zh/" },
    ],
    [
      "link",
      { rel: "alternate", hreflang: "tw", href: "https://vmct-cn.top/tw/" },
    ],
    [
      "link",
      {
        rel: "alternate",
        href: `/imgs/favicon/favicon.ico`,
        type: "image/x-icon",
      },
    ],
    ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],
    ["meta", { property: "og:site", content: "website" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:creator", content: "@Wulian233" }],
    ["meta", { name: "twitter:widgets:csp", content: "on" }],
  ],
  ignoreDeadLinks: [
    "/playground",
    /^https?:\/\/localhost/,
    /\/repl\//,
    (url) => url.toLowerCase().includes("ignore"),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["@nolebase/*"],
    },
    ssr: { noExternal: ["@nolebase/*"] },
    server: { host: true, fs: { allow: ["../.."] } },
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL("./theme/components/Footer.vue", import.meta.url),
          ),
        },
      ],
    },
    plugins: [
      Unocss(),
      GitChangelog({
        repoURL: () => "https://github.com/Wulian233/vmct-cn.top",
        mapAuthors: [
          {
            name: "Wulian233",
            username: "Wulian233",
            mapByNameAliases: ["Wulian"],
            avatar: generateAvatarUrl("Wulian233"),
          },
        ],
      }),
      GitChangelogMarkdownSection(),
    ],
    json: { stringify: true },
  },
  ...createConfigureFunction(),
  markdown: {
    image: { lazyLoading: true },
    config(md) {
      md.use(MarkdownItFootnote);
      md.use(colorPreviewPlugin);
      md.use(cardPlugin);
      md.use(imgSize);
      md.use(obsidianImageSize);
      md.use(spoiler);
    },
  },
});
