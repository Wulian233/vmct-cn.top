---
title: Markdown 增强语法指南
description: 本项目文档页面使用Markdown语法进行编写，除了 Vitepress 支持的 Markdown 基础组件之外我们额外添加和实现了一些特有语法和组件并在此演示
layout: doc
search: false
---

## 目录 {#toc}

[[TOC]]

---

## Footnote 脚注 {#footnote}

- 在 Markdown 中使用 [^锚点文字] 来定义脚注。
- 在之后的任何位置使用 [^锚点文字]: ... 来描述脚注内容。
- 如果脚注包含多个段落，其后的段落应当保持双层缩进

#### 例子 {#footnote-example}

脚注 1 链接[^first]。

脚注 2 链接[^second]。

行内的脚注^[行内脚注文本] 定义。

重复的页脚定义[^second]。

[^first]: 脚注 **可以包含特殊标记**

    也可以由多个段落组成

[^second]: 脚注文字。

```md
脚注 1 链接[^first]。

脚注 2 链接[^second]。

行内的脚注^[行内脚注文本] 定义。

重复的页脚定义[^second]。

[^first]: 脚注 **可以包含特殊标记**

    也可以由多个段落组成

[^second]: 脚注文字。
```


## Card 卡片 {#card}

### Props {#card-props}

| 接口        | 描述                                             | 默认值 |       类型        |
| ----------- | :----------------------------------------------- | :----: | :---------------: |
| title       | 卡片标题，必填项                                 |   -    |     `String`      |
| desc        | 卡片描述，为空时默认显示为 link                  |  link  |     `String`      |
| link        | 卡片跳转链接，非必填                             |   -    |     `String`      |
| logo        | 卡片下方Logo的链接，非比填。填self默认为VMlogo |   -    |     `String`      |
| theme       | 卡片主题，非必填                                 | normal | `normal`or`media` |
| color       | 卡片链颜色，非必填                               | normal |     `String`      |
| cover       | 卡片封面链接，非必填。仅在normal主题生效         |   -    |     `String`      |
| hoverShadow | 是否启用卡片 hover 时阴影效果，默认启用          |  true  |     `Boolean`     |
| shadow      | 是否启用卡片阴影效果，默认启用                   |  true  |     `Boolean`     |

> B站，QQ，B站的链接可以自动识别，无需手动填写logo

### Example {#card-example}

> Normal Theme

```card
logo: self
title: That normal theme card
desc: This is description
cover: https://upload-bbs.miyoushe.com/upload/2024/02/21/292762008/86d3c06e1a1adf7ef432cf838f7abb8c_7693471731342377565.png?x-oss-process=image/resize,s_500/quality,q_80/auto-orient,0/interlace,1/format,jpg
```

```card
logo: self
title: That normal theme card
desc: No cover
```

````md
```card
logo: self
title: This normal theme card but no cover
desc: No cover
cover: https://upload-bbs.miyoushe.com/upload/2024/02/21/292762008/86d3c06e1a1adf7ef432cf838f7abb8c_7693471731342377565.png?x-oss-process=image/resize,s_500/quality,q_80/auto-orient,0/interlace,1/format,jpg
```

```card
logo: self
title: This normal theme card
description: i am description
```
````

> Medium Theme

```card
title: 观看客户端基础使用教程
link: https://www.bilibili.com/video/BV1uU4y157Te
theme: medium
```

```card
title: 网页版地图
link: https://yuanshen.site/
logo: self
desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
theme: medium
```

````md
```card
title: 观看客户端基础使用教程
link: https://www.bilibili.com/video/BV1uU4y157Te
theme: medium
```

```card
title: 网页版地图
link: https://yuanshen.site/
desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
theme: medium
```
````

---

## Frontmatter Config {#frontmatter}

### footer {#fm-footer}

- 类型：Boolean
- 默认：true

是否显示页面的页脚

```yml
---
footer: false #隐藏该页面的页脚
---
```

### wip {#fm-wip}

- 类型：Boolean
- 默认：false

配置页面顶部显示“施工中”的横幅，会覆盖 `banner` 配置

```yml
---
wip: true #显示施工中横幅
---
```

### banner {#fm-banner}

- 类型：String

配置页面的顶部的横幅内容，支持输入HTML不支持Markdown。默认隐藏

```yml
---
banner: 我是Banner
---
```

### bannerExpiryDate {#fm-banner-expiry-date}

- 类型：Date

配置页面顶部的横幅关闭日期，默认无

```yml
---
banner: 服务器维护公告
bannerExpiryDate: 2025-2-1
---
```

### docHeader {#fm-doc-header}

- 类型：Boolean
- 默认：true

是否使用 docHeader 展示标题

> 仅会在 `Layout: doc` 时自动启用

```yml
---
docHeader: false #隐藏该页面的 docHeader
---
```
