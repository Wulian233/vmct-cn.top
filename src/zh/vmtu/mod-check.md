---
layout: doc
title: 模组安装检测
---

VMTU 有模组安装检测功能。其中，i18nUpdateMod 的安装检测功能为默认启用，
Vault Patch 和 Texture Locale Redirector 的安装检测功能为默认禁用。

```toml
i18nUpdateModCheck = true  # 是否检查安装 i18nUpdateMod 模组（默认启用）
vaultPatcherCheck = false  # 是否检查安装 Vault Patch 模组（默认禁用）
```

对于 i18nUpdateMod 和 Vault Patch 模组，如果游戏内缺少任意一项，就会弹出提示屏幕，提醒玩家安装模组，如下图所示：

![](/imgs/vmtu/mod-check-i18n.png)

若相应模组均已安装，则不会出现任何提示；

注：本提示屏幕可由玩家自行跳过，可以按 `esc` 或右下方的`我知道我在做什么！`按钮。

---

对于 Texture Locale Redirector 模组，如果游戏内缺少该模组，则弹出提示屏幕。

与前两者不同的是，该提示屏幕仅提醒玩家可选安装该模组，且添加了复选框。
勾选后玩家即使没有安装该模组也将不会再收到任何提示。

```toml
textureLocaleRedirector = false   # 是否检查安装 Texture Locale Redirector 模组（默认禁用）
```

<!-- ![](/imgs/vmtu/mod-check-tlr.png) -->
