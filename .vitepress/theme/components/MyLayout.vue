<script setup>
import Banner from "./Banner.vue";
import BackToTop from "./BackToTop.vue";
import { defineAsyncComponent } from "vue";
import DocHeader from "./DocHeader.vue";
import HighlightTargetedHeading from "./HighlightTargetedHeading.vue";

import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { nextTick, provide } from "vue";

const { isDark } = useData();

provide("toggle-appearance", async ({ clientX: x, clientY: y }) => {
  // https://caniuse.com/?search=startViewTransition
  // 火狐浏览器不支持 startViewTransition，只能硬切，不然会报错
  if (!document.startViewTransition) {
    isDark.value = !isDark.value;

    if (isDark.value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return;
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ];

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: "ease-in",
      pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
    },
  );
});
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-top>
      <Banner />
    </template>
    <template #layout-bottom>
      <HighlightTargetedHeading />
    </template>
    <template #doc-footer-before>
      <BackToTop />
    </template>
    <template #doc-before>
      <DocHeader />
    </template>
  </DefaultTheme.Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
