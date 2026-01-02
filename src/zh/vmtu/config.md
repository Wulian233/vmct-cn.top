---
layout: doc
title: 配置文件

---

## 配置文件说明

本模组会在首次启动且未找到相关配置文件时自动生成两个文件：

1. Mod配置文件：用于控制模组核心功能的开关
2. `modpackinfo.json`：用于定义汉化补丁的版本信息和更新检测配置

## Mod配置

文件位于游戏的`config/vmtranslationupdate.toml`，用于设置具体模组功能的开关，

```toml
devMode = false                                           # 供开发者使用的测试模式，会有更多日志，并在聊天栏打印整合包信息
autoSwitchLanguage = true                        # 自动切换语言（默认启用）
autoDownloadVMTranslationPack = false  # 自动下载VM汉化资源包
checkModPackTranslationUpdate = true    # 检查整合包汉化更新
autoLoadExtraTranslationPack = false        # 自动加载扩展汉化资源包
resourcePackIndex = DEFAULT                   # 资源包在资源包列表中的位置
extraPackName = ""                                     # 扩展汉化资源包名称（包括扩展名）
extraPackCustomIndex = 0                         # 自定义扩展翻译资源包在资源包列表中的位置
i18nUpdateModCheck = true                     # 默认检查是否安装i18nUpdateMod模组（默认启用）
vaultPatcherCheck = false                          # 默认不检查是否安装Vault Patch模组
```

为了方便使用，本配置文件的所有内容均可在游戏内的模组配置界面进行修改。[^1]

## `modpackinfo.json`

`modpackinfo.json`是用于标记整合包信息以及汉化包配置的文件，此文件主要用于让VMTU基于此文件向VM Metadata查询汉化包更新。

`modpackinfo.json`内各字段解释如下：

### `modpack`

`modpack.name`：整合包名称

`modpack.version`：汉化适配的整合包版本

#### `modpack.translation`

`modpack.translation.id`：用于向vm-meta查询汉化的id（要与vm-meta的一致）

`modpack.translation.url`：在官网的汉化发布页面

`modpack.translation.language`：默认语言，用于语言切换功能

`modpack.translation.version`：汉化补丁包版本号，用于设定当前汉化补丁版本

`modpack.translation.resourcePackName`：VM汉化资源包名称，用于下载汉化资源包

:::details `modpackinfo.json` 示例

```json
{
  "modpack": {
    "name": "ExampleModpack",
    "version": "0.1.0",
    "translation": {
      "id": "example",
      "url": "https://vmct-cn.top/modpacks/example/",
      "language": "zh_cn",
      "version": "1.0.0",
      "resourcePackName": "VM汉化组模组汉化包1.19及以上"
    }
  }
}
```

:::



[^1]: 对于 Fabric 版本，需安装可选的 Modmenu 模组后才能看到模组页面。
