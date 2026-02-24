---
layout: doc
title: 配置文件
---

## 配置文件说明

VMTU 共有 3 个配置文件，要使模组正常运行三者缺一不可。

本模组会在首次启动且未找到相关配置文件时在以下目录自动生成两个默认版的配置文件：

- `config/vmtranslationupdate.toml`：用于控制具体模组功能的启用与否
- `modpackinfo.json`：用于定义汉化补丁的版本信息和更新检测配置

对于 VMTU 模组的开发者和汉化补丁维护者，还需了解云端 vm-meta V2 版的配置文件。
此文件用户不可见。

- `vm-meta`：用于汉化更新检测，存储汉化补丁的汉化版本信息及对应支持的整合包版本

## 模组功能开关配置

我们首先来介绍 `vmtranslationupdate.toml`。

它是 VMTU 模组的主要配置文件，位于游戏的 `config` 目录下。此文件用于控制具体模组功能的启用与否。

下方为默认生成的配置文件内容：

```toml
[misc]                                  # 其他配置
devMode = false                         # 供开发者使用的测试模式，会输出更多日志，并在聊天栏打印整合包信息
autoSwitchLanguage = false              # 是否自动切换语言（默认禁用）
checkModPackTranslationUpdate = false   # 是否检查整合包汉化更新
[resourcePack]                          # 资源包相关配置
autoDownloadVMTranslationPack = true    # 是否自动下载VM汉化资源包（默认启用）
autoLoadExtraTranslationPack = false    # 是否自动加载扩展汉化资源包（默认禁用）
resourcePackIndex = "DEFAULT"           # 资源包在资源包列表中的位置
extraPackName = ""                      # 扩展汉化资源包名称（包括扩展名）
extraPackCustomIndex = 0                # 自定义扩展翻译资源包在资源包列表中的位置
[modInstallCheck]                       # 模组安装检查配置
i18nUpdateMod = true                    # 是否检查安装 i18nUpdateMod 模组（默认启用）
vaultPatcher = false                    # 是否检查安装 Vault Patch 模组（默认禁用）
textureLocaleRedirector = false         # 是否检查安装 Texture Locale Redirector 模组（默认禁用）
```

为了方便使用，本配置文件的所有内容均可在游戏内的模组配置界面进行修改。[^1]

![](/imgs/vmtu/config.png)

## 汉化信息配置

`modpackinfo.json` 是用于标记整合包信息以及汉化包配置的文件，位于游戏的根目录下。
此文件用于让 VMTU 基于此文件内的信息向云端查询游戏安装的汉化补丁是否需要更新。

下方为默认生成的配置文件内容：

```json
{
  "modpack": {
    "name": "ExampleModpack", // 整合包名称（暂无用途）
    "version": "0.1.0", // 汉化适配的整合包版本，用于提示玩家是否需要升级整合包再安装新版汉化
    "translation": {
      "id": "example", // 向云端查询汉化补丁的id（每个整合包汉化id需有唯一性）
      "url": "https://vmct-cn.top/modpacks/example/", // 当前汉化对应的官网的页面
      "language": "zh_cn", // 支持的语言，用于自动切换语言和汉化更新检测
      "version": "1.0.0", // 汉化补丁包版本号，用于设定当前汉化补丁版本
      "resourcePackName": "VM汉化组模组汉化包1.19及以上" // VM汉化资源包名称，用于下载汉化资源包
    }
  }
}
```

## 云端汉化信息配置

`vm-meta` 是存储在云端的汉化补丁信息文件。VMTU 会联网基于此文件内的信息与本地 `modpackinfo.json` 中的汉化信息对比，
来检测汉化补丁是否需要更新。

以 v2 版本为例，此文件位于 <https://gitee.com/Wulian233/vmtu/blob/main/update/v2/vm-meta.json> 。

```json
{
  "metaVersion": "v2", // 数据格式版本，暂无用途
  "modpacks": {
    "example": {
      // 汉化补丁id，对应本地 modpackinfo.json 中的 translation.id
      "translationVersion": "1.1.0", // 最新汉化补丁版本号
      "modpackVersion": "1.0.2" // 该汉化补丁支持的最新整合包版本号
    },
    "example2": {
      // 汉化补丁id，对应本地 modpackinfo.json 中的 translation.id
      "translationVersion": "1.4.0", // 最新汉化补丁版本号
      "modpackVersion": "1.2.1" // 该汉化补丁支持的最新整合包版本号
    }
  }
}
```

有关云端 vm-meta 文件的更多信息，请参见 [VM Metadata 文档](./metadata) 。

[^1]: 对于 Fabric 版本，需安装可选的 Modmenu 模组后才能看到模组页面。
