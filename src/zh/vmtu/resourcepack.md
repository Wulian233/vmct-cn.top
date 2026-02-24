---
layout: doc
title: 资源包相关
---

VMTU 支持自动下载并应用从网络下载的汉化资源包。
此项功能的核心代码（VMTUCore）基于 i18nUpdateMod3 模组的代码修改而来，并做了大量内部调整以更好地服务 VMTU 的功能。

在最新版中，VMTU 还支持指定资源包加载顺序的优先级，更好地配合 i18n 汉化资源包使用。

## 自动下载汉化资源包

VM汉化资源包是 VM 汉化组专门为补全模组汉化维护制作的资源包，内含多年来 VM 汉化组及组员全部的整合包模组汉化文件。

目前资源包覆盖的模组数量如下：

- 1.12.2（53个模组）
- 1.16（52个模组）
- 1.18（155个模组）
- 1.19 及以上（214个模组）

---

当 `vmtranslationupdate.toml` 中的 `autoDownloadVMTranslationPack` 启用时，VMTU 将会自动下载并应用 VM 汉化资源包，
此功能默认启用。

```toml
[resourcePack]
autoDownloadVMTranslationPack = false   # 是否自动下载VM汉化资源包（默认启用）
```

你可以在 `modpackinfo.json` 中设置 VM 汉化资源包。汉化资源包名称及其支持版本如下表：

| 汉化资源包名称               | 支持的Minecraft版本 |
| ---------------------------- | ------------------- |
| VM汉化组模组汉化包1.19及以上 | 1.19~               |
| VM汉化组模组汉化包1.18       | 1.18.x              |
| VM汉化组模组汉化包1.16       | 1.16.x              |
| VM汉化组模组汉化包1.12       | 1.12.2              |

汉化资源包名称对应的下载链接写死在模组代码中，不可由外部修改。
资源包文件也位于 [Gitee 仓库中](https://gitee.com/Wulian233/vmtu/tree/main/resourcepack)。

另外，VM 汉化资源包也在 [Modrinth](https://modrinth.com/resourcepack/vmct) 和 [CurseForge](https://www.curseforge.com/minecraft/texture-packs/vm-chinese-mods-translation) 有发布。

## 扩展资源包

当 `vmtranslationupdate.toml` 中的 `autoLoadExtraTranslationPack` 启用时，VMTU 将会自动应用扩展汉化资源包

你可以在配置文件中的 `extraPackName` 设置扩展汉化资源包名称（包括后缀名）。

![](/imgs/vmtu/config-resourcepack.png)

`extraPackCustomIndex` 用于设置扩展资源包在资源包列表的顺序。此项更多内容将在自定义资源包顺序讲解。

```toml
[resourcePack]
autoLoadExtraTranslationPack = false    # 是否自动加载扩展汉化资源包（默认禁用）
resourcePackIndex = "DEFAULT"  # 资源包在资源包列表中的位置
extraPackName = ""             # 扩展汉化资源包名称（包括扩展名）
extraPackCustomIndex = 0       # 自定义扩展翻译资源包在资源包列表中的位置
```

## 自定义资源包顺序

自定义资源包顺序 `resourcePackIndex` 可以设定为以下状态：

- `DEFAULT` ：在资源包列表中插入汉化资源包时，不调整插入顺序
- `TOP_OF_CFPA` ：在资源包列表中插入汉化资源包时，先将CFPA资源包置顶再将汉化资源包插入CFPA资源包上面
- `BOTTOM_OF_CFPA` ：在资源包列表中插入汉化资源包时，先将CFPA资源包置顶再将汉化资源包插入CFPA资源包下面
- `CUSTOM_INDEX` ：在资源包列表中插入汉化资源包时，使用自定义顺序插入到列表中
