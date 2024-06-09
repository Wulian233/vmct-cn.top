模组会在`.minecraft/<mcversion>/config/`文件夹创建名为`vmtranslationupdate`的配置文件（1.12.2后缀是.cfg，其他版本为.toml）。

配置项如下：
1. 自动根据切换语言（`autoSwitchLanguage`）：默认禁用，在安装了[Stenographer](https://modrinth.com/mod/stenographer)模组后将禁用。
2. 自动检测整合包汉化版本更新（`checkModPackTranslationUpdate`）：默认启用，在每次玩家进入世界后检查整合包汉化更新。
3. 自动下载VM汉化资源包（`autoDownloadVMTranslationPack`）：默认启用，在每次加载游戏时下载VM汉化资源包。
4. 自动安装VM汉化资源包（`autoInstallVMTranslationPack`）：默认启用，在每次加载游戏时安装VM汉化资源包。前置为自动下载VM汉化资源包（`autoDownloadVMTranslationPack`）必须开启。
5. 显示小提示（`displayTips`）：默认启用，在玩家进入存档后每25分钟（可配置）在聊天栏发送一条知识。
6. 检测玩家名称彩蛋（`playerNameCheck`）：默认启用，在特定玩家进入存档后用于称呼的玩家英文名称将改为定义的专属称呼。
7. 选择切换语言为（`switchLanguage`）：默认为`zh_cn`, 选择要切换的语言（当自动根据切换语言被打开时在每次游戏启动时生效），此处应填语言代码。
8. 更新检测链接（`modPackTranslationUpdateCheckUrl`）：只能填写指向一个txt文件的链接，链接的txt文件只能有此整合包翻译版本号。如：`https://vmct-cn.top/modpacks/example/update.txt`
9. 下载链接（`modPackTranslationUrl`）：填写一个指向整合包下载页的链接。如：`https://vmct-cn.top/modpacks/example/`
10. 获取知识内容的链接（`tipsUrl`）：前置为显示小提示（`displayTips`）必须开启。用于知识显示功能，此链接必须指向一个txt文件。
11. 整合包翻译版本（`modPackTranslationVersion`）：整合包汉化本地版本号。
12. 发送知识的时间间隔（分钟）（`tipsMinutes`）：用于知识显示功能，可配置显示的时间间隔，单位为分钟。
13. 下载资源包的链接（`translationPackUrl`）：填写一个汉化资源包下载链接，但不包括文件名及其后缀。如：`https://cdn.modrinth.com/data/IDWIdXwS/versions/V5YtW17O/VM汉化组模组汉化包1.20.zip` 你只需要填写 `https://cdn.modrinth.com/data/IDWIdXwS/versions/V5YtW17O/`
14. 资源包的文件名（`translationPackName`）：填写汉化资源包名称，不要带文件名后缀。如：VM汉化组模组汉化包1.20
15. 玩家对应称呼的链接（`nameUrl`）：前置为检测玩家名称彩蛋（`playerNameCheck`）必须开启。用于定义称呼玩家的名称，必须为一个指向json文件的链接。如：`https://vmct-cn.top/name.json`。格式为`"玩家名": "称呼"`