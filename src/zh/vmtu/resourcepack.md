---
layout: doc
title: 资源包
---

## 自动下载汉化资源包

当配置文件中的`autoDownloadVMTranslationPack`启用时，VMTU 将会自动下载并应用 VM 汉化资源包

你可以在 `modpackinfo.json` 中设置 VM 汉化资源包。汉化资源包名称及其支持版本如下表：

| 汉化资源包名称 | 支持的Minecraft版本               |
| ---------- | --------------------------------- |
| VM汉化组模组汉化包1.19及以上      | 1.19~ |
| VM汉化组模组汉化包1.18   | 1.18.x                      |
| VM汉化组模组汉化包1.16     | 1.16.x                   |
| VM汉化组模组汉化包1.12     | 1.12.2                   |

## 扩展资源包

当配置文件中的`autoLoadExtraTranslationPack`启用时，VMTU 将会自动应用扩展汉化资源包

你可以在配置文件中的`extraPackName`设置扩展汉化资源包名称（包括扩展名）。

`extraPackCustomIndex`用于设置扩展资源包在资源包列表的顺序。此项更多内容将在自定义资源包顺序讲解。

## 自定义资源包顺序

自定义资源包顺序`resourcePackIndex`可以设定为以下状态：

`DEFAULT` ：在资源包列表中插入汉化资源包时，不调整插入顺序
`TOP_OF_CFPA` ：在资源包列表中插入汉化资源包时，先将CFPA资源包置顶再将汉化资源包插入CFPA资源包上面
`BOTTOM_OF_CFPA` ：在资源包列表中插入汉化资源包时，先将CFPA资源包置顶再将汉化资源包插入CFPA资源包下面
`CUSTOM_INDEX` ：在资源包列表中插入汉化资源包时，使用自定义顺序插入到列表中