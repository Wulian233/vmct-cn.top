---
layout: doc
title: 更新检测配置
---

在上一节的[汉化补丁配置说明](./config)中，我们介绍了`modpackinfo.json`中的各项功能。
现在，我们按照该文件内的功能逐一详细的介绍使用方法。

整合包更新检测功能是VMTU模组核心的功能之一，其行为由以下的3项配置共同决定：

```json
{
  "modpack": {
    "name": "ExampleModpack",
    "version": "0.1.0",
    "translation": {
      "id": "example", // [!code highlight]
      "url": "https://vmct-cn.top/modpacks/example/", // [!code highlight]
      "language": "zh_cn",
      "version": "1.0.0", // [!code highlight]
      "resourcePackName": "VM汉化组模组汉化包1.19及以上"
    }
  }
}
```

未完成

![](/imgs/vmtu/zh_cn.png)

当玩家在中文环境下（简中、繁中、港中），且未完成

![](/imgs/vmtu/zh_tw.png)

另外，从 4.0.0 版本开始，VMTU 添加了一条客户端指令 `/vmtu check`，用于手动触发汉化更新检测。

该指令会忽略配置文件中的`checkModPackTranslationUpdate`选项，强制进行更新检测。
并且所有游戏语言都可以使用该指令。
