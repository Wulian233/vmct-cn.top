---
title: 汉化准则
layout: doc
comment: false
---

为了适应VM汉化组自身翻译领域的特点与随着时间发展相关实用工具的不断出现，本文档以CFPA原有 Mod 规范文档的基础之上做了部分演绎和扩充，希望各位参与翻译的译者能尽量遵守本文档中的一些指示，将翻译文件标准化。

如果你对本文档存在疑问，想要提出建议，或者想要联系我们，请加入我们的 [QQ 群](https://qm.qq.com/q/WU5GGJhJeu)。

如果你对地图翻译感兴趣，想要了解地图汉化准则，可以访问[地图汉化准则](/rule/map)页面。

本文档所参考的原文采用 [WTFPL](http://www.wtfpl.net/about/) 协议

- 原文链接：<https://github.com/CFPAOrg/TransRules/blob/master/file/rules.md>（有删改）。

## 01.普适原则

- **以原文为准**。若原文确实无法简明翻译可考虑意译
  - 根据游戏版本的不同，原文一般为
    - `en_us.lang`（1.11 - 1.12.2 版本）
    - `en_us.json`（1.13 - 1.21 版本）文件内的内容
  - 但如果是日站 Mod 或者其它语言的 Mod 请参考对应的源语言文件
    - 若原文确定是生造词，应先根据游戏内表现和生造词词根等拟定翻译，若无特殊意义则可采用音译（例如 [Environmental Tech](https://www.curseforge.com/minecraft/mc-mods/environmental-tech) ）
- 在翻译之前熟悉翻译词条的位置，以及对应物品或者选项的功能，确保能知道语境下词条的真正意义
- 符合中文表达习惯，如果无法转换则改写句子形式
  - 比如手册中存在的定语从句或被动语态
  - 原文：`The Red Cedar Tree is a large tree that has magical properties.`（[Totemic](https://www.curseforge.com/minecraft/mc-mods/totemic) 模组）
  - 译文：`高大无比的红柏树有着魔法的属性。`
- 此前版本的翻译**可以**作为参考但**不是**唯一参考
- 对于那些没有翻译的条目，或者翻译与原文完全一致，则可以直接复制英文原文
- 对于不知道怎么翻译，提交时有暂未翻译的条目，请直接跳过这些条目，不要复制英文原文
- 如果是通过 GitHub 提交，请注意语言文件应当为 `UTF-8 without BOM` 的编码

## 02.保留字符（串）

- 某些词条中出现的 `%s`、`%d` 等格式字符或以 `%` 围起来的字符串（如 `%msg%`），请保留这些字符串，它们会在代码中被替换为对应的文本
  - 格式字符可以通过添加位置标识的方式调换前后顺序，以适应翻译的需要
    - 原文：`Summoned %s with difficulty %d`
    - 译文：`召唤了难度为%2$d的%1$s`
  - 如果不确定最终效果，请打开游戏进行测试
- 注意百分号是全角还是半角，切勿直接使用百度、必应、谷歌等网站或软件翻译标点符号
- 在某些 Mod 的手册中会使用 `<br>`、`\n` 等作为换行符，遇到时请保留
- 某些 Mod 使用 `&` 或者 `§` 后加一个字符或者数字表示颜色或者格式，在此标识出现后的文字都将变成对应的颜色或者格式，一般使用 `&0` 或者 `§0` 恢复默认颜色，`&r` 或者 `§r` 恢复默认格式。遇到时请保留，并将其放到对应文本两侧
  - 具体字符含义请参考 Minecraft Wiki：[格式化代码](https://zh.minecraft.wiki/w/%E6%A0%BC%E5%BC%8F%E5%8C%96%E4%BB%A3%E7%A0%81)
- 在遇到 tellraw JSON 字符串的时候，请**仅**翻译 `"text"` 项的值，对于其它的键和值均不翻译，请保留
  - 原文：`{"text":" has shared a ","color":"blue"}`（[Botania](https://github.com/Vazkii/Botania)，Vazkii）
  - 译文：`{"text":"分享了一本","color":"blue"}`
- 少数 Mod 使用 XML 格式的语言文件，对于这种文件请保留以 `<` 和 `>` 开头结尾的标签
- 若语言文件所使用的格式上述未提及，请参照对应文件格式进行翻译，若不清楚请查找相应信息或询问其他有经验的译者
- 能量单位、体积单位等（如：FE、RF、MB）请保留不翻译
- 按键（如 Shift、Ctrl 等）请不要翻译，并将首字母大写（部分模组语言文件会将 Shift 键描述为 `Sneak`）
- 命令（如 `/say`，`/effect`）以及明文参数请保留不要翻译，而解释性参数则需要翻译
  - 原文：`/time (add|query|set) <time>`（Minecraft，Mojang）
  - 译文：`/time (add|query|set) <时间>`

## 03.标点符号

- 多数情况下请与原版 Minecraft 保持统一，使用中文的标点符号。如果是保留不翻译的英文中的标点符号，则仍保留英文的标点符号
  - 原文：`Free fall from the top of the world (build limit) to the bottom of the world and survive`（Minecraft，Mojang）
  - 译文：`从世界顶部（建筑高度限制处）自由落体，坠至世界底部并存活下来`
- 多数情况下请遵守《标点符号用法》：[GB(T)15834-2011](<https://people.ubuntu.com/~happyaron/l10n/GB(T)15834-2011.html>)
- 对于英文中 `[]` 的翻译，需保证本模组统一
  - 以下为常见的处理方法
    - 将 `[]` 更改为方头括号`【】`
    - 将 `[]` 更改为全角方括号`［］`
- 对于英文标点符号前或后的空格，请在修改标点符号为中文时删除
- 仅修改文本当中的标点符号，遇到例如 JSON 格式标点符号时请保留

## 04.排版

### 通用规则

- 英文字母、阿拉伯数字等非中文字符，不应加空格与中文文本分开
  - 不适用于有特殊规定的专有名词
  - 在 Patchouli 提供的书籍文本中仍需添加空格
    - 原文：`JEI must be on the server to handle this Chat Command, it is too long for Minecraft to send.`（[Just Enough Items](https://github.com/mezz/JustEnoughItems/blob/1.12/src/main/resources/assets/jei/lang/en_us.lang), mezz）
    - 译文：`此命令对Minecraft来说太长了，必须在服务端上安装JEI才能处理。`
- 全角标点与其他字符之间不必留空格
  - 原文：`While simple in theory, in practice it was a little difficult. For my simple network at the time, the activation cost was quite steep because of the initial pressure required, and the drain for each source of lava was not something I was prepared for. (20000 LP to activate, 500 LP per source block)`（[Blood Magic](https://github.com/WayofTime/BloodMagic/blob/1.9/src/main/resources/assets/bloodmagicguide/lang/en_US.lang), WayOfTime, et al.）
  - 译文：`然而这只是理论。说起来容易做起来难：当时我使用的简易网络完全不适合拿来为这个仪式供应魔力，不仅挤压熔岩需要的压力巨大（需要20000LP启动仪式），抽取熔岩的开支也不小（每产生一格熔岩需要500LP）。`
- 阿拉伯数字与英文单位之间不必添加空格
  - 原文：`Ideal for decoration, holding 50mb of fluid. Retains liquid when broken.`([Tinkers' Construct](https://github.com/SlimeKnights/TinkersConstruct/blob/1.16/src/main/resources/assets/tconstruct/lang/en_us.json), SlimeKnights)
  - 译文：`理想的装饰建材，能存储50mB的流体。被破坏时仍能保留其中的液体。`

### 1.12.2 及以下版本特有规则

- 当遇到英文字母、阿拉伯数字等非中文文本时，应在该段文本开头与结尾处加空格与中文文本分开
  - 原文：`JEI must be on the server to handle this Chat Command, it is too long for Minecraft to send.`（[Just Enough Items](https://github.com/mezz/JustEnoughItems/blob/1.12/src/main/resources/assets/jei/lang/en_us.lang), mezz）
  - 译文：`此命令对 Minecraft 来说太长了，必须在服务端上安装 JEI 才能处理。`
- 对于物品名来说也应如此
  - 原文：`TIS-3D Reference Manual` ([TIS-3D](https://github.com/MightyPirates/TIS-3D/blob/master-MC1.11/src/main/resources/assets/tis3d/lang/en_US.lang), fnuecke, et al.)
  - 译文：`TIS-3D 参考手册`
- 不适用于有特殊规定的专有名词

## 05.字幕

- [字幕](https://zh.minecraft.wiki/w/%E5%AD%97%E5%B9%95)（Subtitle）一般是翻译键中带有 `subtitles` 或 `sound` 的条目。
- 若字幕原文为主谓结构，则应译作 `主体：声音` 的格式。- 原文：`Bee buzzes`（Minecraft，Mojang）
  - 译文：`蜜蜂：嗡嗡`
- 若原文没有主语，视情况翻译。
  - 原文：`Rowing`（Minecraft，Mojang）
  - 译文：`划船`

## 06.专有名词

- 人名/生物名/商标名/唱片名
  - 有通用翻译的外文人名或商标，则进行翻译
    - 如翻译牛顿、阿基米德等
  - 出现神话或故事中出现的人物或怪物名请首先搜索流行译名，如果找不到的话则音译
    - 原文：`Baykok`（[Totemic](https://github.com/TeamTotemic/Totemic)，TeamTotemic）
    - 译文：`贝柯克`
  - 指 Mod 社区的某个人物，或贡献列表中的人物，或者已有商标，唱片等无中文翻译的则保留不翻译
    - 如 `Vazbee`（[Magic Bees](https://github.com/MagicBees/MagicBees)，MysteriousAges, Arkandos, mezz, et al.）
    - 原文：`Patreon Pie`（[Pam's HarvestCraft](https://github.com/MatrexsVigil/harvestcraft)，MatrexsVigil）
    - 译文：`Patreon派`
  - 对于其它的名字，保留原文不翻译
- 对于模组名，不必翻译，保留原文即可
- 对于原版中出现过的词语请根据 Minecraft Wiki 上的[标准译名](https://zh.minecraft.wiki/w/Minecraft_Wiki:%E8%AF%91%E5%90%8D%E6%A0%87%E5%87%86%E5%8C%96)按照对应 Minecraft 版本进行翻译
- 若某词在现实中有对应的事物存在，但游戏中的表现与该实际事物不相关，应采取手段使该词的译名与现实不同
- 目前可以**参考**
  - [模组翻译参考词典](https://dict.mcmod.cn/)
  - [我的世界中英术语库](https://github.com/CFPAOrg/Glossary)
  - [模组译名标准化列表](https://github.com/Meow-J/Mod-Translation-Styleguide/blob/master/glossary.md)（**部分已过时**）
  - [CFPA汉化仓库主页](https://github.com/CFPAOrg/Minecraft-Mod-Language-Package)
  - [VM汉化组模组翻译仓库主页](https://github.com/VM-Chinese-translate-group/mod-standard-translation-repository)下的各类可用资源
- 如果还没有找到，请自行拟定翻译，如果实在无法想出翻译，则暂时留为英文

## 07.语言

- 对于语言的正式程度，请参见词条原文
  - 如果原文非常正式，那么请不要玩梗或卖萌
    - 原文：`This pair of enchanted boots have been stuffed full of magic to ease the journey of any traveler.<BR>They allow you to move faster than normal. They also allow you to jump higher and fall further.`（[Thaumcraft 5](https://github.com/Azanor/thaumcraft-5)，Azanor，节选）
    - 译文：`这双富含神秘的魔力工艺技巧的靴子能让任何旅行者的旅途变得更轻松愉快。<BR>它能够让你移动得比平常更加迅速，并且能够直接掠过较高的台子。它也能够让你跳得更高，落得更远。`
  - 如果原文本身就在玩梗，或者语气非常轻松，那么也不需要使用非常正式的语言
    - 原文：`NANI SORE!? BOTANIA IS OUTDATED!?`（[Botania](https://github.com/Vazkii/Botania)，Vazkii）
    - 译文：`(つд⊂)なにそれ！？植物魔法版本落后了！？`
- 如果原文使用了拉丁化的日语，可以将其书写为对应中文的[空耳](https://zh.moegirl.org.cn/index.php?title=%E7%A9%BA%E8%80%B3)，或者直接保留为罗马音
- 如果原文使用了游戏电影等中的梗，请首先参考原出处的中文翻译，如果是日语而没有统一的翻译，则改写为日语原文（在此情况下请保持翻译与否的统一）
  - 原文：`You notice Botania has updated. It fills you with determination.`（[Botania](https://github.com/Vazkii/Botania)，Vazkii，梗出自于Undertale）
  - 译文：`你注意到植物魔法已经更新了。这使你充满了决心。`
- 如果你自己做了一版卖萌形式或者玩梗形式的汉化文件，请不要发送到作者那里作为默认的汉化文件，仅流传在第三方就行了
- **切勿在语言文件中玩不适宜的烂梗**（尤其是带有较大负面影响的）

## 08.Mod 名翻译

- 这里的 Mod 名指的是语言文件内的 Mod 名
- 翻译 Mod 名前请至少将整个 Mod 通玩一遍，熟悉 Mod 的特性与整体风格
- 如果是国创 Mod，则中文名采用 Mod 作者自定义的名称
- 如果是经典 Mod，有早已熟知唯一译名，则采用该熟知译名
  - `IndustrialCraft2` -> `工业时代 2`
  - `Twilight Forest` -> `暮色森林`
- 如果 Mod 名为术语或者单词翻译不存在歧义，则采用翻译名
  - `Forestry` -> `林业`
  - `Logistics Pipes` -> `物流管道`
  - `Chisel` -> `凿子`
- 如以上均不符，应在汉化文件内保留英文，外部社区翻译仅供流传使用。有一定用户量后，如果某一社区翻译人气非常高，则之后会采用人气最高版本的翻译（如 Minecraft，我的世界）
- 部分模组存在多组分栏，建议统一采用 `模组名丨分栏名` 进行书写，中间的竖线为汉字 `丨(gǔn)`
  - `Forestry Apiculture` -> `林业丨养蜂`

## 9.署名

- 除非作者在语言文件中专门提供了翻译者署名的地方，请不要添加任何其它标识标明翻译者的名字。

## 10.相关工具和网站

- 由MC百科制作的[模组翻译参考词典](https://dict.mcmod.cn/)，数据源来自[CFPA](https://github.com/CFPAOrg/Minecraft-Mod-Language-Package)。
- 由VM汉化组捂脸编写的[snbt-json 互转工具](https://github.com/VM-Chinese-translate-group/translate-tools/blob/main/snbt_json_converter/main.py)，下载可在[Release](https://github.com/VM-Chinese-translate-group/translate-tools/releases)页面找到对应系统的版本。
- 由VM汉化组捂脸编写的[FTB任务颜色字符检查工具](https://github.com/VM-Chinese-translate-group/translate-tools/blob/main/ftbq_color_check/main.py)，下载可在[Release](https://github.com/VM-Chinese-translate-group/translate-tools/releases)页面找到对应系统的版本。
- Tryanks 编写的适用于 Minecraft 1.16+ 版本的 Minecraft [模组翻译器](https://github.com/CFPATools/Minecraft-Mods-Translator)（**已归档**）
- Snownee 编写的一个[在线网页工具](https://snownee.github.io/l10n-tools/update.html)
- crafteverywhere 之前写的一个[文本更新检测工具](https://github.com/crafteverywhere/Craft_Minecraft_Mod_Localization/blob/master/lang_checker.py)（运行需要 Python 3+ 环境）
- GitHub [语言文件关键字查询](https://github.com/Meow-J/Mod-Translation-Styleguide/blob/master/tools/GithubKeywordQuery.py)（需要 Python 3.4+ 环境）

## 11.参考资料

- [中文文案排版指北](https://github.com/mzlogin/chinese-copywriting-guidelines)
