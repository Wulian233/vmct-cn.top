---
layout: doc
title: VM Metadata
---

VM Metadata 是用于实时更新整合包版本和资源包版本数据的文件，这些文件不保存在本地，
它们被存放在 [Gitee 仓库内](https://gitee.com/Wulian233/vmtu)。

你可以把它理解为一种“云控”，但是我们只用来提醒更新汉化补丁。

VM Metadata 目前有 v1 和 v2 两个版本，文件结构如下：

### VM Metadata v1

> [!IMPORTANT]
> VM Metadata v1 已经弃用，VMTU 后续可能会删除此兼容。建议使用 VM Metadata v2！

VM Metadata v1 使用 txt 为存储版本的文件，文件结构如下所示：

```txt
1.0.0
1.2.0
```

VM Metadata v1 会根据 txt 的行数判断汉化补丁版本的功能。
第一行必填，为汉化补丁版本号，第二行选填，为支持的整合包版本号。

要启用 VM Metadata v1，请在 `modpackinfo.json` 中的 `translation` 节点添加 `updateCheckUrl` 字段，
并填写可访问的 txt 直链。

```json
{
  "modpack": {
    "name": "ExampleModpack",
    "version": "0.1.0",
    "translation": {
      "id": "example",
      "updateCheckUrl": "https://gitee.com/Wulian233/vmtu/blob/main/update/example.txt", // [!code highlight]
      "language": "zh_cn",
      "version": "1.0.0",
      "resourcePackName": "VM汉化组模组汉化包1.19及以上"
    }
  }
}
```

### VM Metadata v2

VM Metadata v2 重写了版本检测逻辑，使用 json 作为存储版本的文件。
v2 版本将所有整合包的版本信息写在同一个文件中，并将链接写死在模组代码中，不可由外部修改。

v2 版本的文件地址为：<https://gitee.com/Wulian233/vmtu/blob/main/update/v2/vm-meta.json>

有关 VM Metadata v2 的格式信息，请参见[配置文件](./config#云端汉化信息配置)中的“云端汉化信息配置”章节。
