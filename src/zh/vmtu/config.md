---
layout: doc
title: 使用与配置文件
gitChangelog: false
---

## 配置文件说明

本模组会在首次启动且未找到相关配置文件时自动生成两个配置文件：

1. **功能配置文件**
   `config/vmtranslationupdate.toml`
   （1.12.2版本为`.cfg`后缀）
   控制模组核心功能开关

2. **整合包汉化信息文件**
   `<mcversion>/modpackinfo.json`
   （1.12.2版本位于`config//modpackinfo.json`）
   定义汉化补丁的版本信息和更新检测配置

---

## 功能配置详解

文件位于游戏的`config/vmtranslationupdate.toml`，用于设置具体模组功能的开关，
实现具体功能的配置位于下文的`modpackinfo.json`。

```toml
autoSwitchLanguage = true   # 自动切换语言
autoDownloadVMTranslationPack = false # 默认不自动下载VM汉化资源包
translationPackSource = "GITEE"       # 汉化资源包下载源
checkModPackTranslationUpdate = true  # 默认检查汉化更新
i18nUpdateModCheck = true # 默认检查是否安装i18nUpdateMod模组
vaultPatcherCheck = false # 默认不检查是否安装Vault Patch模组
testMode = false          # 供开发者使用的测试模式，会有更多日志
```

未完成

---

## 汉化补丁配置说明

```json
{
  "modpack": {
    // 整合包基础信息（当前版本未实际使用）
    "name": "ExampleModpack",
    "version": "v0.1.0",
    // 汉化配置核心参数
    "translation": {
      "url": "https://vmct-cn.top/modpacks/example/", // 汉化包官网
      "language": "zh_cn", // 默认语言，用于语言切换功能
      "version": "1.0.0", // 当前汉化版本号，用于检测汉化更新
      "updateCheckUrl": "https://gitee.com/Wulian233/vmtu/raw/main/update/example.txt", // 汉化版本标识文件链接，用于检测汉化最新版本
      "resourcePackName": "VM汉化组模组汉化包1.19及以上" // 基础汉化资源包名称
    }
  }
}
```

> 注：基础汉化资源包名称指的是需要下载的基础汉化资源包文件名

未完成
