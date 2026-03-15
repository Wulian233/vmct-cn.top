---
layout: doc
title: modpackinfo.json文件
---

`modpackinfo.json`是用于标注整合包信息的文件，用于检测汉化更新。他们会被放在游戏根目录里。

具体格式如下：

> [!IMPORTANT] 重要提示
> `modpack.translation.updateCheckUrl`（4.0.0）和`modpack.translation.resourcePackName`（5.0.2）已被弃用

```json
{
  "modpack": {
    "name": "ExampleModpack",
    "version": "0.1.0",
    "translation": {
      "id": "example",
      "url": "https://vmct-cn.top/modpacks/example/",
      "updateCheckUrl": "https://gitee.com/Wulian233/vmtu/blob/main/update/example.txt",
      "language": "zh_cn",
      "version": "1.0.0",
      "resourcePackName": "VM汉化组模组汉化包1.19及以上"
    }
  }
}
```

`modpack.name`：标记整合包名称

`modpack.version`：标记整合包版本（可以从整合包自带的metadata获取版本），用于检测整合包版本

`modpack.translation.id`：整合包在vm-meta的id

`modpack.translation.url`：整合包在汉化组网站的页面链接

`modpack.translation.updateCheckUrl`：vm-meta v1的检测链接（已在4.0.0及更高版本弃用）

`modpack.translation.language`：标记汉化支持的语言，如果游戏当前语言为其他语言的时候将在游戏内聊天栏提示，详见[自动切换语言](./language)

`modpack.translation.version`：标记汉化版本，用于检测汉化版本

`modpack.translation.resourcePackName`：标记所需要的汉化资源包名称（已在5.0.2及更高版本弃用）

## 整合包版本（`modpack.version`）

`modpack.version`用于检测整合包版本，可以从整合包自带的metadata获取整合包本地版本，支持的metadata/整合包更新检测mod如下：

| 名称 | metadata文件所在位置                      |
| ---------- | ------------------------------------------ |
| FTB Modpack Metadata      | `config/metadata.json` |
| ModpackUpdateChecker Mod   | `config/modpack-update-checker/config.json` |
| SimpleModpackUpdateChecker Mod     | `config/simple-modpack-update-checker.json` |
| SimpleUpdateChecker Mod     | `config/simpleupdatechecker_modpack.json` |


