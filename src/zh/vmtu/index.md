---
layout: doc
title: VM汉化更新模组文档
---

VM 汉化更新是一个为 Minecraft 整合包汉化补丁设计的自动化汉化管理工具，涵盖了绝大部分汉化相关的使用场景。

普通玩家可以通过它获得额外的模组资源包汉化，VM汉化组内部也可以通过它为玩家提供更好的汉化体验。

> [!IMPORTANT] 重要提示
> 本文档所有内容基于 VMTU 最新版 5.1.0 编写。
> MC 1.12.2版本的 VMTU 配置文件为 cfg 格式，与文档演示的　toml 格式存在较大差异，请以游戏内实际为准

<DownloadLinks :methods="[
  { id: 'curseforge', text: 'CurseForge', icon: '/imgs/svg/curseforge.svg', link: 'https://www.curseforge.com/minecraft/mc-mods/vmtranslationupdate' },
  { id: 'modrinth', text: 'Modrinth', icon: '/imgs/svg/modrinth.svg', link: 'https://modrinth.com/mod/vmupdate' },
  { id: 'github', text: '模组主源码仓库', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/VMTranslationUpdateMod' },
  { id: 'github-core', text: '下载核心源码仓库', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/VMTUCore' },
  { id: 'github-metadata', text: 'GitHub 元数据', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/VM-Resources' }
]" />

作者：捂脸、TexTrue

开源协议：MIT（VMTranslationUpdateMod）、AGPL（VMTUCore）

## 🎯 功能

模组的所有功能都是可配置的，关于配置文件及更详细的功能介绍请看后文。

- ✅ 自动检测汉化版本更新，并在游戏里通知玩家更新。
- 📥 自动下载并激活汉化资源包
- 🌐 自动切换游戏语言
- 📦 指定整合包配置文件，支持为每个包指定自身汉化策略
- 🚦 指定资源包加载顺序
- 🔍 支持检测 I18nUpdateMod、Vault Patcher、Texture Locale Redirector 模组是否缺失。如未安装将弹出提示页面引导下载

其中，自动下载并激活资源包功能（VMTUCore）的代码源于 i18nUpdateMod3 模组代码修改，按照上游协议规定使用 AGPL 协议。
