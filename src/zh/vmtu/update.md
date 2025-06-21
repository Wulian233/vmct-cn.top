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
    "version": "v0.1.0",
    "translation": {
      "url": "https://vmct-cn.top/modpacks/example/", // [!code highlight]
      "language": "zh_cn",
      "version": "1.0.0", // [!code highlight]
      "updateCheckUrl": "https://gitee.com/Wulian233/vmtu/raw/main/update/example.txt", // [!code highlight]
      "resourcePackName": "VM汉化组模组汉化包1.19及以上"
    }
  }
}
```

未完成

`updateCheckUrl`项对应的是一个纯文本txt格式的网络链接，内容为汉化补丁
最新版的版本号。其内容格式仅为一行的版本号构成，例如`1.0.0`。你可以打开
[上述的链接](https://gitee.com/Wulian233/vmtu/raw/main/update/example.txt)查看示例。
