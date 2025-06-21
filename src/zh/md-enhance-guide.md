---
title: Markdown 增强语法指南
description: 本项目文档页面使用Markdown语法进行编写，除了 Vitepress 支持的 Markdown 基础组件之外我们额外添加和实现了一些特有语法和组件并在此演示
layout: doc
search: false
showComment: false
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

| 接口        | 描述                                           | 默认值 |       类型        |
| ----------- | :--------------------------------------------- | :----: | :---------------: |
| title       | 卡片标题，必填项                               |   -    |     `String`      |
| desc        | 卡片描述，为空时默认显示为 link                |  link  |     `String`      |
| link        | 卡片跳转链接，非必填                           |   -    |     `String`      |
| logo        | 卡片下方Logo的链接，非比填。填self默认为VMlogo |   -    |     `String`      |
| theme       | 卡片主题，非必填                               | normal | `normal`or`media` |
| color       | 卡片链颜色，非必填                             | normal |     `String`      |
| cover       | 卡片封面链接，非必填。仅在normal主题生效       |   -    |     `String`      |
| hoverShadow | 是否启用卡片 hover 时阴影效果，默认禁用        | false  |     `Boolean`     |
| shadow      | 是否启用卡片阴影效果，默认禁用                 | false  |     `Boolean`     |

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
title: 观看官网宣传片
link: https://www.bilibili.com/video/BV1hm411C7ex
theme: medium
```

```card
title: VM汉化组官网
link: https://vmct-cn.top/
logo: self
desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
theme: medium
```

````md
```card
title: 观看官网宣传片
link: https://www.bilibili.com/video/BV1hm411C7ex
theme: medium
```

```card
title: VM汉化组官网
link: https://vmct-cn.top/
desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
theme: medium
```
````

---

## Frontmatter 配置 {#frontmatter}

### footer {#fm-footer}

- 类型：Boolean
- 默认：true

是否显示页面的页脚

```yml
---
footer: false # 隐藏该页面的页脚
---
```

### docHeader {#fm-doc-header}

- 类型：Boolean
- 默认：true

是否使用 docHeader 展示标题

> 仅会在 `Layout: doc` 时自动启用

```yml
---
docHeader: false # 隐藏该页面的 docHeader
---
```

### showComment {#fm-showComment}

- 类型：Boolean
- 默认：true

是否显示评论区

```yml
---
showComment: false # 隐藏该页面的评论区
---
```
