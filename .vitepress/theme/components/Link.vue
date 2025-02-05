<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vitepress";

const props = defineProps<{
  href?: string;
  noIcon?: boolean;
  title?: string;
}>();

const isExternal = computed(() => props.href && /^[a-z]+:/i.test(props.href));
</script>

<template>
  <component
    :is="href ? 'a' : 'span'"
    :class="{ link: href }"
    :href="
      isExternal ? href : withBase(`${href![0] === '/' ? href : '/' + href}`)
    "
    :target="isExternal ? '_blank' : '_self'"
    :rel="isExternal ? 'noopener noreferrer' : ''"
    :title="title ? title : href"
  >
    <slot />
    <label
      v-if="isExternal && !noIcon"
      i-custom-round-arrow-outward
      :class="$style.icon"
    />
  </component>
</template>

<style module>
.icon {
  cursor: pointer;
  display: inline-block;
  margin-top: -2px;
  margin-left: 4px;
  width: 11px !important;
  height: 11px !important;
  transition: fill 0.25s;
}
</style>
