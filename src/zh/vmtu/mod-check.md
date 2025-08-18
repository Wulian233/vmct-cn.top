---
layout: doc
title: 模组安装检测提示
---

当配置文件中的下列两项启用至少一项时，VMTU 将会检测其启用检测的模组是否安装

```toml
i18nUpdateModCheck = true # 默认检查是否安装i18nUpdateMod模组
vaultPatcherCheck = false # 默认不检查是否安装Vault Patch模组
```

如相应模组均已安装，则不会出现任何提示；

如未安装，则会在游戏启动时弹出提示屏幕，提醒玩家安装模组，如下图所示：

![](/imgs/vmtu/mod-check.png)

本提示屏幕可由玩家自行跳过，可以按 `esc` 或右下方的`我知道我在做什么！`按钮。
