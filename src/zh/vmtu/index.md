---
layout: doc
title: VM汉化更新模组文档 3.2.0
---

<div align="center">
   <img height="128px" width="128px" alt="logo" src="https://cdn.modrinth.com/data/wvCSIW08/c6d47a463a59dd38faf9777c17c634f514fa5b1e.png"/>
   <h1>VM汉化更新模组文档 3.2.0</h1>
</div>

VM汉化更新是一个为 Minecraft 整合包汉化补丁设计的自动化汉化管理工具，涵盖了绝大部分汉化相关的使用场景。
目前主要为VM汉化组内部使用。

<DownloadLinks :methods="[
  { id: 'curseforge', text: 'CurseForge', icon: '/imgs/svg/curseforge.svg', link: 'https://www.curseforge.com/minecraft/mc-mods/vmtranslationupdate' },
  { id: 'modrinth', text: 'Modrinth', icon: '/imgs/svg/modrinth.svg', link: 'https://modrinth.com/mod/vmupdate' },
  { id: 'github', text: 'Github仓库', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/VMTranslationUpdateMod' },
  { id: 'github-core', text: '下载核心Github仓库', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/VMTUCore' },
  { id: 'gitee', text: 'Gitee元数据', icon: '/imgs/svg/gitee.svg', link: 'https://gitee.com/Wulian233/vmtu' }
]" />

作者：捂脸、TexTrue

开源协议：MIT（主）、AGPL（资源包下载核心）

## 🎯 功能

模组的所有功能都是可配置的，关于配置文件及更详细的功能介绍请看后文。

- ✅ 自动检测翻译版本更新，并在游戏里通知玩家去下载更新。
- 📥 自动下载并激活翻译资源包
- 🌐 自动切换游戏语言
- 📦 指定整合包配置文件，支持每个包指定自身翻译策略
- 🔍 检测 I18nUpdateMod 和 VaultPatcher 补全汉化模组是否缺失。如未安装将弹出提示页面引导下载（可按esc退出）

其中，自动下载并激活翻译资源包功能（VMTUCore）的代码源于i18nUpdateMod3模组代码，按照上游协议规定使用AGPL协议。
