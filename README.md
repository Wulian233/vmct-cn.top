<div align="center">
  <img src="src/public/imgs/logo/logo_256.png"/>
</div>

# VM汉化组官方网站v3

立即访问：<https://vmct-cn.top/>

## 📖 使用与部署

本网站使用[VitePress](https://vitepress.dev/zh/)作为静态站点生成器。我们推荐使用VSCode编辑器进行开发。

在开发前，请先安装[NodeJS](https://nodejs.org/zh-cn/download/prebuilt-installer)，
我们使用的包管理器是[pnpm](https://pnpm.io/zh/)。

安装依赖：

```shell
pnpm i
pnpm run prepare
```

我们使用了一套完全免费的部署方案，可长期稳定运行：

1. 使用[Firebase](https://firebase.google.com/)自动拉取代码并构建，并作为服务器与CDN分发。
2. 使用[giscus](https://giscus.app/zh-CN)以github仓库讨论作为网站评论区。
3. 使用[Cloudflare](https://cloudflare.com)托管域名和其他项目。
4. 使用[Microsoft Clarity](https://clarity.microsoft.com/)和[Google Analytics](https://analytics.google.com/)分析网站访问情况。

PS：域名在腾讯云购买

## 开发者文档

### 汉化下载按钮与弹窗

最常用的汉化下载弹窗 vue 格式如下：

```vue
<DownloadLinks :methods="[
  { id: 'quark-lanzou', text: '下载汉化', icon: '/imgs/logo/logo_64.png', lanzouLink: '蓝奏云下载链接', quarkLink: '夸克网盘下载链接' },
  { id: 'curseforge', text: '下载i18n模组', icon: '/imgs/svg/curseforge.svg', link: 'https://www.curseforge.com/api/v1/mods/297404/files/6351071/download' },
  { id: 'github', text: 'Github仓库', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/' },
  { id: 'lazy', text: '懒汉下载', icon: '/imgs/lazydl.png', link: '蓝奏云下载链接' }
]" />

```

其中，`id` 为代码内部标识，通过指定它们用于区分不同的按钮。

`text` 为按钮上显示的文本。

`icon` 为按钮上显示的图标，可填写本项目内的图片路径或在线URL。

`link` 为点击按钮后跳转到的网址。

有几类特殊的id需要强调，指定它们并点击会触发不同的效果：`quark-lanzou`、`lanzou`、`lazy`、`mapdl`

它们分别代表：夸克-蓝奏云双链接下载弹窗，蓝奏云下载弹窗、懒汉下载弹窗和地图下载弹窗。

对于这类特殊id，我们有一些强制规定，表格中留空则为根据实际灵活调整：

| id           | text     | icon                   | link                                                     |
| :----------- | :------- | :--------------------- | :------------------------------------------------------- |
| quark-lanzou | 下载汉化 | /imgs/logo/logo_64.png | -                                                        |
| lanzou       | 下载汉化 | /imgs/svg/lanzou.svg   | -                                                        |
| mapdl        | 下载汉化 | -                      | -                                                        |
| lazy         | 懒汉下载 | /imgs/lazydl.png | 需与下载汉化链接相同。如有多个下载地址，则添加蓝奏云链接 |


## 👀 协议

本项目使用[MIT协议](LICENSE)开源。

特别感谢[空荧酒馆文档](https://github.com/kongying-tavern/docs)项目，本项目基于它进行开发。

特别感谢CrychicTeam的[CrychicDoc项目](https://github.com/PickAID/CrychicDoc/blob/main/.vitepress/theme/components/comment.vue)（旧版文件），评论区部分代码来自于此项目并进行部分修改。
