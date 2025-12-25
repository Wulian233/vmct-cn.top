---
layout: doc
title: VM Metadata
---

VM Metadata是用于实时更新整合包版本和资源包版本数据的文件，这些文件不保存在本地，他被存放在[gitee的一个仓库](https://gitee.com/Wulian233/vmtu)内。

怎么说这个东西呢，你可以把他理解为一种“云控”，但是我们只用来提醒更新汉化补丁。

VM Metadata 目前有v1和v2两个版本，他们的文件结构如下：

### VM Metadata v1

> [!IMPORTANT]
> VM Metadata v1 已经弃用，VMTU 后续可能会删除此兼容，建议使用 VM Metadata v2 ！

VM Metadata v1 使用txt作为存储版本的文件，他看起来像是这样：

:::details `example.txt` 示例
```txt
1.0.0
```
:::

VM Metadata v1只有存储汉化补丁版本的功能

### VM Metadata v2

VM Metadata v2 重写了版本检测逻辑，使用json作为存储版本的文件，他看起来像是这样：

:::details `vm-meta.json` 示例
```json
{
  "metaVersion": "v2",
  "modpacks": {
    "example": {
      "translationVersion": "1.1.0",
      "modpackVersion": "1.0.2"
    },
    "example2": {
      "translationVersion": "1.4.0",
      "modpackVersion": "1.2.1"
    }
  }
}
```
:::

`metaVersion` ：VM Metadata当前版本
`modpacks.[id]` ：整合包id，对应`modpackinfo.json`的`modpack.translation.id`
`modpacks.[id].translationVersion` ：整合包汉化补丁最新版本，对应`modpackinfo.json`的`modpack.translation.version`
`modpacks.[id].modpackVersion` ：整合包最新版本，对应`modpackinfo.json`的`modpack.version`