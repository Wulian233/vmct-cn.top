<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

function handleHighlight() {
  if (!window || !window.location) return
  if (!window.location.hash) return

  const targetedHashId = decodeURIComponent(window.location.hash)
  if (!targetedHashId) return

  let elem: HTMLElement | null

  try {
    elem = document.querySelector(targetedHashId)
  } catch (e) {
    console.error(e)
    return
  }
  if (!elem) return

  if (!elem.classList.contains('HighlightTargetedHeading'))
    elem.classList.add('HighlightTargetedHeading')

  elem.classList.remove('HighlightTargetedHeadingAnimated')
  setTimeout(() => {
    if (elem) elem.classList.add('HighlightTargetedHeadingAnimated')
  }, 10)
}

const route = useRoute()

onMounted(handleHighlight)

watch(route, async () => {
  await nextTick()
  handleHighlight()
})

useEventListener('hashchange', handleHighlight)
</script>

<template>
  <slot />
</template>

<style>
:root {
  --highlight-targeted-heading-color: var(--vp-custom-block-tip-text);
  --highlight-targeted-heading-bg: var(--vp-custom-block-tip-bg);
}

@keyframes highlight-targeted-heading-animation {
  0% {
    background-color: transparent;
    box-shadow: 0px 0px 0px 8px transparent;
  }
  10%,
  35% {
    color: var(--highlight-targeted-heading-color);
    border-color: transparent;
    border-radius: 4px;
    background-color: var(--highlight-targeted-heading-bg);
    box-shadow: 0px 0px 0px 8px var(--highlight-targeted-heading-bg);
  }
  99% {
    background-color: transparent;
    border-radius: 4px;
    box-shadow: 0px 0px 0px 8px transparent;
  }
  100% {
    border-radius: 0px;
    background-color: transparent;
    box-shadow: none;
  }
}

.HighlightTargetedHeadingAnimated {
  animation: highlight-targeted-heading-animation 1.5s ease-in-out;
}
</style>
