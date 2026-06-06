---
layout: doc
title: 语言相关
---

VMTU 对原版的语言设计进行了增强，支持备选回退语言和自动切换语言

## 备选回退语言

模组针对部分中文语言进行了特殊的加载顺序处理，此项功能无法禁用和调整。具体规则如下：

- 简体中文（中国大陆）
  → 繁體中文（台灣）
  → 繁體中文（香港特別行政區）

- 繁體中文（台灣）
  → 繁體中文（香港特別行政區）
  → 简体中文（中国大陆）

- 繁體中文（香港特別行政區）
  → 繁體中文（台灣）
  → 简体中文（中国大陆）

- 文言（華夏）
  → 繁體中文（台灣）
  → 繁體中文（香港特別行政區）
  → 简体中文（中国大陆）

## 自动切换语言

当模组配置中的 `autoSwitchLanguage` 项启用时，VMTU 将会在游戏启动时自动切换游戏语言。

你可以在 `modpackinfo.json` 中设置默认语言。语言以语言代码[^1]表示，一般为 `zh_cn`（简体中文），代表汉化为简中翻译。

```json
{
  "modpack": {
    "name": "ExampleModpack",
    "version": "0.1.0",
    "translation": {
      "id": "example",
      "url": "https://vmct-cn.top/modpacks/example/",
      "language": "zh_cn", // [!code highlight]
      "version": "1.0.0"
    }
  }
}
```

[^1]: 更多的语言代码[详见 Minecraft Wiki](https://zh.minecraft.wiki/w/%E8%AF%AD%E8%A8%80) 中的`实际使用`一栏。
