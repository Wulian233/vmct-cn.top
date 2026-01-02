---
layout: doc
title: 模组安装检测
---

当 `vmtranslationupdate.toml` 中的 `i18nUpdateModCheck` 或 `vaultPatcherCheck` 启用至少一项时，
VMTU 将会检测其启用检测的模组是否安装。

```toml
i18nUpdateModCheck = true               # 是否检查是否安装 i18nUpdateMod 模组（默认启用）
vaultPatcherCheck = false               # 是否检查是否安装 Vault Patch 模组（默认禁用）
```

如相应模组均已安装，则不会出现任何提示；

如未安装，则会在游戏启动时弹出提示屏幕，提醒玩家安装模组，如下图所示：

![](/imgs/vmtu/mod-check.png)

注：本提示屏幕可由玩家自行跳过，可以按 `esc` 或右下方的`我知道我在做什么！`按钮。
