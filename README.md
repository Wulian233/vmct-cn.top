<div align="center">
  <img src="src/public/imgs/logo/logo_256.png"/>
</div>

# VM汉化组官方网站v3

主站点：<https://vmct-cn.top/>

状态监控：<https://status.vmct-cn.top/>

## 📖 什么是VM汉化组？

VM汉化组是一个用爱发电专注于汉化MC整合包与地图的非盈利组织。
我们制作的汉化及相关技术最终目的是使公众收益，汉化组将寻求高质量永久免费汉化包以造福玩家。
汉化组的成立不是为了任何人的私人利益。
汉化组产生的所有收益将“不可撤销的”用于上述目的。

## 📖 使用与部署

本网站使用[VitePress](https://vitepress.dev/zh/)作为静态站点生成器。我们推荐使用VSCode编辑器进行开发。

安装[NodeJS](https://nodejs.org/zh-cn/download/prebuilt-installer)

对于本地开发，使用[pnpm](https://pnpm.io/zh/)包管理器：

```shell
pnpm i
pnpm run dev
```

我们使用了一套完全免费的部署方案，可长期稳定运行：

1. 使用[Vercel](https://vercel.com/)自动拉取代码并构建，并作为服务器与CDN分发。
2. 部分页面使用[路过图床](https://imgse.com/)手动上传作为图片存储。

PS：域名在腾讯云购买

## 👀 协议

本项目使用自由的[MIT协议](LICENSE)开源。

特别感谢[空荧酒馆文档](https://github.com/kongying-tavern/docs)项目，本项目基于它进行开发。
