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

## kubejs提取 <Badge type="warning" text="不推荐，放弃更新" />

> [!TIP] 提示
> 不推荐，只能处理很有限的内容。
提取不全，放弃更新

把整合包kubejs写的魔改内容文本提取为json语言文件，并在原本的位置自动填入本地化键值。

由于js本身是编程语言，有极大的灵活性，工具只是列出了mc特有的Text.of词条，效果十分有限。

还可以暴力提取所有字符串，但是动辄几千行，对翻译造成较大困扰，所以停止更新，不建议使用。

还加入了对本地AI翻译的支持，使用XDawn制作的专用MC整合包调整翻译模型，品质较好。

但由于工具是Python写的，模型是CPU运行（无论是否有英伟达显卡），效率也十分有限。

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/Wulian233/kubejs-translate' },
  { id: 'dl', text: '下载', icon: '/imgs/svg/github.svg', link: 'https://github.com/Wulian233/kubejs-translate/releases/tag/1.3' }
]" />

## FTBQ颜色字符检查

用于检查翻译后的语言文件中是否存在FTB任务&颜色字符后面的数字或字母丢失的问题。这会导致任务无法正常显示。

输入一个json路径，会检查颜色字符是否合法。是唯一一个使用C++写的工具，秒出结果。

会输出错误的行数，启用详细错误信息后会显示对应的键值和译文。

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/translate-tools/blob/main/ftbq_color_check/ftbq_color_check.cpp' },
  { id: 'dl', text: '下载', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/translate-tools/releases/tag/0.1' }
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
> 这是原作WET的分支，此工具不支持1.21+，但有exe。
原作支持新版mc，但需要运行源代码，环境安装比较困难。

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/3093FengMing/WorldTranslationExtractor' },
  { id: 'dl', text: '下载', icon: '/imgs/svg/github.svg', link: 'https://github.com/3093FengMing/WorldTranslationExtractor/releases' }
]" />

## 内容提取（WEH）

> [!TIP] 提示
> 这是WETM的分支，最终提取效果与功能完全相同，
但大量改进了使用体验

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/Wulian233/WorldTranslationHelper' },
  { id: 'dl', text: '下载', icon: '/imgs/svg/github.svg', link: 'https://github.com/Wulian233/WorldTranslationHelper/releases/tag/1.0' }
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
  { id: 'dl', text: '下载', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/translate-tools/releases/tag/1.5.0' }
]" />
