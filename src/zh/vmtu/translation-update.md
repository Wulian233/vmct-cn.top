---
layout: doc
title: 汉化更新检测
---

在上一节的[ `modpackinfo.json`](./config#汉化信息配置) 中，我们介绍了这个文件中的各项功能。
现在，我们按照该文件内的功能逐一详细的介绍使用方法。

整合包更新检测功能是 VMTU 的核心功能之一，其行为由 `modpackinfo.json` 内的 3 项配置决定：

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

当本地的汉化版本号与云端查询获取的汉化补丁版本号不同时，VMTU 会在玩家进入世界后在聊天栏显示如下内容：

![](/imgs/vmtu/zh_cn.png)

当玩家在中文环境下（简中、繁中、港中、文言），但游戏语言不是所设置的支持语言
（`modpackinfo.json` 的 `modpack.translation.language`）时会显示如下内容：

![](/imgs/vmtu/zh_tw.png)

另外，VMTU 添加了一条客户端指令 `/vmtu check`，用于手动触发汉化更新检测。

该指令会忽略 `vmtranslationupdate.toml` 中的 `checkModPackTranslationUpdate` 选项，强制进行更新检测，
且所有游戏语言都可以使用该指令。

此外，在最新版 5.0.0 中，该指令新增了两个可选参数：`modpack` 和 `translation`。

通过指定检测参数，可以仅检测汉化适配的整合包或特定汉化补丁的更新。
此功能仅影响指令返回发在聊天栏的信息，不会影响玩家每次进入世界时的检测行为（全部检测）。
