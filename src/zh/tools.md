---
title: 自研工具
description: 所有工具均完全免费且开源，一切为了社区发展。
layout: doc
---

[[toc]]

# 模组翻译工具

## MC模组翻译参考词典

基于 CFPA 数据源的模组翻译查询网站，支持以中文和英文互相检索翻译条目，便于译者翻译模组之用。

### 功能特色

- 智能搜索，搜索结果按输入匹配度和出现次数综合排序，支持按 modid 筛选搜索结果
- 多种模式，支持英查中和中查英两种模式译文互查
- 智能合并，智能识别同一模组的不同版本译文并统一展示
- 自动分页，一页50条结果，网页下方支持快速跳转首页/尾页
- 记录键名，鼠标悬停在`所属模组`条目上方时会显示译文对应的键名
- 及时更新的数据源
- 页面美观，支持暗色模式，并且对手机上的显示效果进行了单独优化

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/Wulian233/mcmod-translation-dict' },
  { id: 'dl', text: '网站链接', icon: 'https://dict.vmct-cn.top/favicon.ico', link: 'https://dict.vmct-cn.top/' }
]" />

# 整合包翻译工具

## Texture Locale Redirector

Texture Locale Redirector 为 Minecraft 资源包提供了原生的多语言纹理支持。

它通过扩展原版的资源加载机制，让你可以在一个资源包中为不同语言提供专门的纹理。
这解决了本地化过程中，因纹理上的文字或图标需要替换而影响其他语言玩家体验的问题。

### 资源包结构示例

在你的资源包中，按照 `assets/<namespace>/textures/<language>/` 的结构来存放本地化纹理。

`<namespace>` 是命名空间，原版为 `minecraft`，模组一般为它们的 modid。

`<language>` 是语言代码，如 `zh_cn`（简体中文）或 `ja_jp`（日文）。

注意：需要替换的纹理的相对路径需与原纹理保持一致。

```
资源包名称/
└── assets/
    └── minecraft（命名空间）/
        └── textures/
            ├── zh_cn/          # 简体中文纹理
            │   ├── block/
            │   │   └── dirt.png  # 替换的泥土纹理
            │   └── item/
            │       └── diamond_sword.png  # 替换的钻石剑纹理
            └── ja_jp/          # 日文纹理
                └── item/
                    └── diamond_sword.png  # 替换的钻石剑纹理
```

本模组同时对 FTB Quests 提供了可选支持。
当 FTB Quests 存在时，任务界面中的图片（ChapterImage）同样会根据当前语言切换到对应的本地化纹理。

更多信息请见[Github介绍](https://github.com/LocalizedMC/TextureLocaleRedirector/blob/1.21.x/README_CN.md)

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/LocalizedMC/TextureLocaleRedirector' },
  { id: 'curseforge', text: '下载', icon: '/imgs/svg/curseforge.svg', link: 'https://www.curseforge.com/minecraft/mc-mods/texture-locale-redirector' },
  { id: 'modrinth', text: '下载', icon: '/imgs/svg/modrinth.svg', link: 'https://modrinth.com/project/texture-locale-redirector' }
]" />

## FTB任务颜色字符合法检查

用于检查翻译后的语言文件中是否存在FTB任务`&`颜色字符后面的数字或字母丢失的问题。这会导致任务无法正常显示。

可以选择一个json文件路径或目录，会检查所有json文件内的颜色字符是否合法。

- 支持彩色日志信息。错误信息为红色，键名为青色，文件名为蓝色，通过检查为绿色。
- 支持排除各类转义符，精准检查到真正的错误
- 支持导出错误报告为html网页，支持暗色模式
- 支持检查单个或整个目录的json文件
- 支持检查json本身格式问题
- 检查错误后会显示具体译文内容，出错位置和对应的键名

---

**效果预览：**

![preview](/imgs/ftbq_color_check.png)

```
文件: C:\Users\Administrator\Downloads\CNPack\kubejs\assets\integrateddynamics\lang\zh_cn.json
键: info_book.integrateddynamics.tutorials.theValueOfOperators.text4
值: &2运算符&0有很多其他的操作，例如&谓词&r合取，翻转&2运算符&0参数，以及关于&7列表&0的更多操作……
错误: '&'后包含非法字符 '谓'
```

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/translate-tools/tree/main/ftbq_color_check' },
  { id: 'dl', text: '下载', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/translate-tools/releases/latest' }
]" />

## 硬编码汉化模组

支持翻译多种硬编码内容，功能强大，技术高深。门槛“较高”。

面向追求极致的高级翻译人员，模组有完整的使用教程和万字的经验笔记，需要编程或计算机基础。

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/3093FengMing/VaultPatcher' },
  { id: 'curseforge', text: '下载', icon: '/imgs/svg/curseforge.svg', link: 'https://www.curseforge.com/minecraft/mc-mods/vault-patcher' },
  { id: 'modrinth', text: '下载', icon: '/imgs/svg/modrinth.svg', link: 'https://modrinth.com/mod/vault-patcher' }
]" />

## FTB任务本地化提取模组

详细介绍请看[作者的使用教程](https://github.com/Litchiiiiii/FTB-Quests-Localizer?tab=readme-ov-file#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8)

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/Litchiiiiii/FTB-Quests-Localizer' },
  { id: 'curseforge', text: '下载', icon: '/imgs/svg/curseforge.svg', link: 'https://www.curseforge.com/minecraft/mc-mods/ftb-quest-localizer' }
]" />

## snbt json 互转工具

用于将FTB任务在mc1.21+新加入的snbt语言文件文件与json格式互转，便于导入翻译平台进行翻译。

输入一个文件路径或目录，会按照选择的模式转换所有文件

- 支持彩色提示信息
- 支持将语言文件导入翻译平台
- 支持转换单个或整个目录的文件
- 支持 snbt json 互转

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/translate-tools/tree/main/snbt_json_converter' },
  { id: 'dl', text: '下载', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/translate-tools/releases/latest' }
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

使用教程见GitHub仓库README

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/Template-Repo' }
]" />

## 译文批量上传下载

批量上传多个文件到Paratranz翻译平台，同时支持下载译文到本地。

使用相关功能需要有Paratranz的项目id和有对应权限用户的token，可在Paratranz个人主页查看。

<DownloadLinks :methods="[
  { id: 'github', text: '源代码', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/translate-tools/tree/main/paratranz_sync' },
  { id: 'dl', text: '下载', icon: '/imgs/svg/github.svg', link: 'https://github.com/VM-Chinese-translate-group/translate-tools/releases/tag/latest' }
]" />
