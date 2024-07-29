<div align="center"><img height="150" src="public/img/vm.png" width="190"/></div>

# VM汉化组官方网站v3
主站点：[点击访问](https://beta.vmct-cn.top/)
状态监控：[点击访问](https://status.vmct-cn.top/)

## 📖 什么是VM汉化组？

VM汉化组是一个用爱发电专注于汉化MC整合包与地图的非盈利组织。我们制作的汉化及相关技术最终目的是使公众收益，汉化组将寻求高质量永久免费汉化包以造福玩家。汉化组的成立不是为了任何人的私人利益。汉化组产生的所有收益将“不可撤销的”用于上述目的。

## 💧 目录介绍

```markdown
- vmct-website-beta
    - .github    自动构建脚本
    - .vitepress
        - config VitePress的配置文件
        - theme  自定义主题和组件
    - map        简体中文地图页面
    - modpacks   整合包页面（仅简中）
    - others     简体中文其他页面
    - public     存放静态文件如图片
    - tw         繁体中文页面
    - readme.md  仓库自述文件
```

## 📖 使用与部署

本网站使用[Vitepress](https://vitepress.dev/zh/)作为静态站点生成器。我们推荐使用VSCode编辑器进行开发。

1. 安装环境[Node.js](https://nodejs.org/zh-cn/download/prebuilt-installer)
2. 克隆仓库到本地
3. 在终端输入`npm install`安装依赖
4. 在终端输入`npm run dev`启动本地服务，可在浏览器预览


我们使用了一套完全免费的部署方案，可长期稳定运行：
1. 使用[github action](.github/workflows/build.yaml)提交自动触发构建为github pages并上传至gh-pages分支。
2. 使用[CloudFlare](https://cloudflare.com/)自动拉取生成后的静态代码，并作为服务器与免费CDN分发。
3. 部分页面使用[路过图床](https://imgse.com/)手动上传作为图片存储。

PS：域名在腾讯云购买

## 👀 协议

本项目使用自由的[MIT许可](LICENSE)开源。
