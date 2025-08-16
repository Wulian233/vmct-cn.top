---
layout: doc
title: 自动切换语言详解
---

当配置文件中的下方条目启用时，VMTU 将会在游戏启动时自动切换游戏语言

```toml
autoSwitchLanguage = true   # 自动切换语言
```

你可以在 `modpackinfo.json` 中设置默认语言。语言以语言代码表示，一般为`zh_cn`（简体中文），代表汉化为简中翻译。

更多的语言值代码[请见 Minecraft Wiki](https://zh.minecraft.wiki/w/%E8%AF%AD%E8%A8%80) 中的`实际使用`一栏。

```json
{
  "modpack": {
    "name": "ExampleModpack",
    "version": "0.1.0",
    "translation": {
      "id": "example",
      "url": "https://vmct-cn.top/modpacks/example/",
      "language": "zh_cn", // // [!code highlight]
      "version": "1.0.0",
      "resourcePackName": "VM汉化组模组汉化包1.19及以上"
    }
  }
}
```