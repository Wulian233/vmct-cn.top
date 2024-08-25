<script setup lang="ts">
import { withBase } from 'vitepress'
import { ref } from 'vue'

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

const showModal = ref(false)
const currentItem = ref<Integration | null>(null)

function handleClick(item: Integration) {
  if (item.id === 'lanzou') {
    currentItem.value = item
    showModal.value = true
    setTimeout(() => {
      document.querySelector('.modal')?.classList.add('show')
    }, 10) // 延迟显示以触发动画
  } else {
    window.open(item.link, item.target || '_self')
  }
}

function confirmNavigation() {
  if (currentItem.value) {
    window.open(currentItem.value.link, currentItem.value.target || '_self')
    closeModal()
  }
}

function closeModal() {
  const modalElement = document.querySelector('.modal')
  if (modalElement) {
    modalElement.classList.add('hide')
    setTimeout(() => {
      showModal.value = false
      currentItem.value = null
      modalElement.classList.remove('show', 'hide')
    }, 500) // 等待动画结束再关闭
  }
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
        :src="withBase(item.icon)"
        class="w-10 h-10 mb-2 no-zoomable"
      />
      <span class="text-sm">{{ item.name }}</span>
      <span class="text-xs opacity-50">{{ item.secondary }}</span>
    </div>
  </div>

  <div v-if="showModal" class="modal">
    <p class="agreement-text">
    在开始下载汉化前，请您先阅读并接受
    <a href="/agreement/" target="_blank" class="link">VM汉化组用户服务协议</a>
    ，并仔细阅读
    <a href="/modpacks/" target="_blank" class="link">汉化补丁安装说明</a>
    。
    </p>
    <div class="modal-buttons">
      <button class="modal-button confirm" @click="confirmNavigation">确定</button>
      <button class="modal-button cancel" @click="closeModal">取消</button>
    </div>
  </div>
</template>

<style scoped>
.agreement-text {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #555;
}

.agreement-text .link {
  color: #007bff;
  text-decoration: none;
  transition: color 0.2s;
}

.agreement-text .link:hover {
  color: #0056b3;
}

.Link {
  color: inherit !important;
  text-decoration: none !important;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  box-shadow: var(--vp-shadow-1);
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

.modal {
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  opacity: 0;
  animation: fadeIn 0.5s forwards;
  max-width: 90%;
  text-align: center;
  box-sizing: border-box;
  visibility: hidden;
}

.modal.show {
  visibility: visible;
}

.modal.hide {
  animation: fadeOut 0.5s forwards;
}

.modal p {
  margin-bottom: 20px;
  font-size: 16px;
  color: #333;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.modal-button {
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s, color 0.2s;
}

.modal-button.confirm {
  background-color: #007bff;
  color: white;
}

.modal-button.confirm:hover {
  background-color: #0056b3;
}

.modal-button.cancel {
  background-color: #f44336;
  color: white;
}

.modal-button.cancel:hover {
  background-color: #d32f2f;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
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
