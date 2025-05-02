---
layout: doc
title: 使用与配置文件 未完成
---

本模组的所有功能都是可配置的。

首次启动游戏，且不存在相关配置时，模组会自动创建2个配置文件。

其一为模组自身功能的开关，位于`.minecraft/<mcversion>/config/`文件夹内，文件名为`vmtranslationupdate.toml`（1.12.2后缀是.cfg）。

其二是关于汉化补丁的相关信息，`modpackinfo.json`。其位于游戏根目录（`.minecraft`），用于指定汉化补丁的版本号及更新检测的链接等。

默认情况下，模组功能配置文件的内容和功能启用情况如下所示：

```toml
autoSwitchLanguage = true   # 自动切换语言
autoDownloadVMTranslationPack = false # 默认不自动下载VM汉化资源包
translationPackSource = "GITEE"       # 汉化资源包下载源
checkModPackTranslationUpdate = true  # 默认检查汉化更新
i18nUpdateModCheck = true # 默认检查是否安装i18nUpdateMod模组
vaultPatcherCheck = false # 默认不检查是否安装Vault Patch模组
testMode = false          # 供开发者使用的测试模式，会有更多日志
```

同时，默认情况下本模组还会创建`modpackinfo.json`文件。其位于游戏根目录（`.minecraft`）内容如下所示：

```json5
{
  modpack: {
    name: "ExampleModpack", // 整合包名称
    version: "v0.1.0", // 整合包版本
    translation: {
      url: "https://vmct-cn.top/modpacks/example/", // 汉化信息页面
      language: "zh_cn", // 指定语言切换功能切换为哪种语言
      version: "1.0.0", // 汉化补丁的版本，用于检测汉化最新版本
      updateCheckUrl: "https://gitee.com/Wulian233/vmtu/raw/main/update/example.txt", // 汉化版本标识文件链接，用于检测汉化最新版本
      resourcePackName: "VM汉化组模组汉化包1.19及以上", // 基础汉化资源包文件名
    },
  },
}
```

> 注：基础汉化资源包名称指的是需要下载的基础汉化资源包文件名
