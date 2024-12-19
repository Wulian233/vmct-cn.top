---
title: 加入社区
description: 希望各位小伙伴能够在社区里友好交流，结识同好，收获成长！
layout: doc
aside: false
---

## 社区交流

<LinkGrid :items="server" />

## QQ 交流群

- [**不知名汉化组交流群** 376139397](https://qm.qq.com/q/zfY3xUJ2YS)

:::details VM汉化组 • QQ 『交流群群规』

引言:arrow_forward:欢迎来到不知名汉化组交流群！为了能让大家和谐共处，下列是些群规，规则的最终解释权归群管理所有。

🈲 禁止黄赌毒

🈲 请勿发血腥暴力图，包括涩图

✔请尊重他人，不要随意辱骂他人

:exclamation: 本群每过一段时间（半年左右）会清人，请保持活跃

:exclamation: 汉化文件及链接在官方账号和官网，本群不能随意发，也别在群文件找

:exclamation: 汉化问题反馈随时发群，反馈要尽量详细（整合包信息，遇到什么问题，有做什么尝试等）

:arrow_forward: 违规者警告一次+禁言（时间看情节严重性），第二次犯飞机票。

<br>

『汉化组相关信息』

汉化组官方B账号:arrow_forward: <https://space.bilibili.com/2085089798>

汉化组官网:arrow_forward: <https://vmct-cn.top>

爱发电:arrow_forward: <https://afdian.com/a/VMhanhuazu>

:::

<script setup>
import { useUrlSearchParams } from '@vueuse/core'
import { onMounted } from 'vue'
import { serverLink, serverJump } from '../components/links/Community'

const params = useUrlSearchParams('history')
const server = [
  serverLink('discord', 'Discord'),
  serverLink('qq', 'QQ'),
]

onMounted(()=> {
  serverJump(params, server)
})
</script>

<style scoped>
@import '../components/links/Community.css';
</style>
