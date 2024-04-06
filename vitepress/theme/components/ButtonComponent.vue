<template>
  <button
    class="button"
    :class="buttonClass"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonClass: {
      type: String,
      default: 'button1' // 默认样式为 button1
    },
    link: {
      type: String,
      default: '#' // 默认链接为空
    }
  },
  methods: {
    handleClick() {
      setTimeout(() => {
        window.location.href = this.link;
      }, 400);
    }
  }
};
</script>

<style scoped>
.button {
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  transition: all 0.2s ease-in-out;
  margin: 1rem auto;
}

.button1 {
  background-color: #4caf50;
  box-shadow: 0 4px #357e36;
}

.button2 {
  background-color: #2196f3;
  box-shadow: 0 4px #1062ad;
}

.button3 {
  background-color: #f32159;
  box-shadow: 0 4px #ad1010bc;
}

.button:active {
  transform: translateY(5px);
  box-shadow: 0 0 #999;
}
</style>
