<script>
import { useElementSize } from '@vueuse/core';
import { ref, watchEffect } from 'vue';

const el = ref();
const { height } = useElementSize(el);

watchEffect(() => {
  if (height.value) {
    document.documentElement.style.setProperty(
      '--vp-layout-top-height',
      `${height.value + 16}px`
    );
  }
});
</script>


<template>
  <div ref="el" class="banner">
    <div class="text">
      VM汉化组网站 v3 版正在制作测试中，发现任何问题请在<a
        href="https://github.com/Wulian233/vmct-website/issues" target="_blank" rel="noopener noreferrer">Github汇报</a>。
    </div>
  </div>
</template>

<style>
html {
  --vp-layout-top-height: 88px;
}

@media (min-width: 375px) {
  html {
    --vp-layout-top-height: 64px;
  }
}

@media (min-width: 769px) {
  html {
    --vp-layout-top-height: 40px;
  }
}
</style>

<style scoped>
.banner {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: var(--vp-z-index-layout-top);

  font-family: monospace;

  padding: 8px;
  text-align: center;

  background: rgb(207, 114, 21);
  color: #fff;

  display: flex;
  justify-content: space-between;
}

.text {
  flex: 1;
}

a {
  text-decoration: underline;
}
</style>