<script setup lang="ts">
import Swal from 'sweetalert2'

defineProps<{
  items: Integration[]
}>()

interface Integration {
  id: string
  icon: string
  name: string
  link: string
  target?: string
  secondary?: string
}

function handleClick(item: Integration) {
  if (item.id === 'lanzou') {
    showModal(item)
  } else {
    window.open(item.link, item.target || '_self')
  }
}

function showModal(item: Integration) {
  Swal.fire({
    title: '在下载前，请您先阅读并接受',
    html: `
      <a href="/agreement/" target="_blank" style="color: blue; text-decoration: underline;">VM汉化组用户服务协议</a>，
      并仔细阅读 <a href="/modpacks/" target="_blank" style="color: blue; text-decoration: underline;">汉化补丁安装说明</a>。
    `,
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    reverseButtons: true,
    focusCancel: true,
    preConfirm: () => {
      if (item.link) {
        window.open(item.link, item.target || '_self')
      }
    }
  })
}
</script>

<template>
  <div class="flex flex-wrap gap-4 slide-enter">
    <div
      v-for="item of items"
      :key="item.name"
      :class="['Link', { 'lazy-text': item.id === 'lazy' }]"
      class="w-30 h-30 text-center text-inherit flex flex-col items-center justify-center"
      @click="handleClick(item)"
    >
      <div
        v-if="item.icon.startsWith('i')"
        :class="item.icon"
        class="w-10 h-10 mb2"
      />
      <img
        v-else
        :src="item.icon"
        class="w-10 h-10 mb-2 no-zoomable"
      />
      <span class="text-sm">{{ item.name }}</span>
      <span class="text-xs opacity-50">{{ item.secondary }}</span>
    </div>
  </div>
</template>

<style scoped>
.Link {
  color: inherit !important;
  text-decoration: none !important;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  transition: background-color 0.25s;
  cursor: pointer;
}

.Link:hover {
  color: var(--vp-c-brand) !important;
}

.lazy-text .text-sm,
.lazy-text .text-xs {
  animation: textFlow 2s linear infinite;
}

@keyframes textFlow {
  0% {
    color: orangered;
  }
  25% {
    color: limegreen;
  }
  50% {
    color: blue;
  }
  100% {
    color: orangered;
  }
}
</style>
