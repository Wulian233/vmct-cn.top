---
title: 自研工具
description: 所有工具均完全免费且开源，一切为了社区发展。
layout: doc
---

[[toc]]

# 整合包翻译工具

## FTB整合包下载

受CurseTheBeast下载工具启发，本工具对普通玩家更加友好，基本功能全覆盖，下载速度更快。

对于存在人工汉化补丁的整合包，支持自动下载并应用汉化，开箱即用，无需任何汉化操作。

对服务端下载（开服）支持有限，此需求推荐使用CurseTheBeast。

支持搜索、输入id、查看流行整合包等多种方式下载。支持Windows、MacOS、Linux系统。

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/Wulian233/FeedTheForge' },
  { id: 'dl', text: '下载', icon: '/imgs/svg/github.svg', link: 'https://github.com/Wulian233/FeedTheForge/releases/' }
]" />

## FTBQ颜色字符检查

用于检查翻译后的语言文件中是否存在FTB任务&颜色字符后面的数字或字母丢失的问题。这会导致任务无法正常显示。

输入一个json路径，会检查颜色字符是否合法。

- 支持彩色提示信息。报错为红色，通过为绿色。
- 支持导出错误报告为txt。
- 可选是否在控制台打印详细信息

1. 开启会在控制台显示具体译文内容
2. 关闭会显示行号

开启详细信息：

```
[CNPack\kubejs\assets\ftbquest\lang\zh_cn.json] SyntaxError: Invalid character '。' after '&' at line 2705
    "不用末影龙，直接制造&6龙息&。",
```

关闭详细信息：

```
[CNPack\kubejs\assets\ftbquest\lang\zh_cn.json] SyntaxError: Invalid character after '&' at line 2705
```

注：无论选择什么，最终保存报错的文件永远为详细版本。

- 支持检查单个或整个目录的json文件，更方便。
- 支持检查json本身格式问题。

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/translate-tools/tree/main/ftbq_color_check' },
  { id: 'dl', text: '下载', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/translate-tools/releases/tag/1.2' }
]" />

## 硬编码汉化模组

支持翻译多种硬编码内容，功能强大，技术高深。门槛“较高”。

面向追求极致的高级翻译人员，模组有完整的使用教程和万字的经验笔记，需要编程或计算机基础。

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/3093FengMing/VaultPatcher' },
  { id: 'curseforge', text: '下载', icon: '/imgs/svg/curseforge.svg', link: 'https://www.curseforge.com/minecraft/mc-mods/vault-patcher' },
  { id: 'modrinth', text: '下载', icon: '/imgs/svg/modrinth.svg', link: 'https://modrinth.com/mod/vault-patcher' }
]" />

## FTBQ提取模组

详细介绍请看[作者的使用教程](https://github.com/Litchiiiiii/FTB-Quests-Localizer?tab=readme-ov-file#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8)

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/Litchiiiiii/FTB-Quests-Localizer' },
  { id: 'curseforge', text: '下载', icon: '/imgs/svg/curseforge.svg', link: 'https://www.curseforge.com/minecraft/mc-mods/ftb-quest-localizer' }
]" />

# 地图翻译工具

## 内容提取（WETM）

> [!TIP] 提示
> 这是原作WET的分支，此工具不支持1.21+，但提供exe文件，开箱即用。
> 原作支持新版mc，但需要运行源代码，环境安装比较困难。

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/3093FengMing/WorldTranslationExtractor' },
  { id: 'dl', text: '下载', icon: '/imgs/svg/github.svg', link: 'https://github.com/3093FengMing/WorldTranslationExtractor/releases' }
]" />

# Paratranz翻译平台解决方案

## Github双向同步action

使用教程见Github仓库README

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/Template-Repo' }
]" />

## 译文批量上传下载

批量上传多个文件到Paratranz翻译平台，同时支持下载译文到本地。

使用相关功能需要有Paratranz的项目id和有对应权限用户的token，可在Paratranz个人主页查看。

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/translate-tools/tree/main/paratranz_sync' },
  { id: 'dl', text: '下载', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/translate-tools/releases/tag/1.2' }
]" />
