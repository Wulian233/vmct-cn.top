<script setup>
import { ref } from 'vue'
const showModal = ref(false)
</script>

<template>
  <button class="modal-button" @click="showModal = true">懒汉下载</button>

  <ClientOnly>
    <Teleport to="body">
      <Transition name="modal">
        <div v-show="showModal" class="modal-mask">
          <div class="modal-container">
            <slot>内容和标题</slot>
            <div class="modal-footer">
              <button class="modal-button" @click="showModal = false">
                关闭
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: var(--vp-c-bg);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-footer {
  margin-top: 8px;
  text-align: right;
}

.modal-button {
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  transition: all 0.2s ease-in-out;
  margin: 1rem auto;
  background-color: #2196f3;
  box-shadow: 0 4px #1062ad;
}

.modal-button:active {
  transform: translateY(5px);
  box-shadow: 0 0 #999;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.1);
}
</style>
