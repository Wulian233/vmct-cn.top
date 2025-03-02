<template>
  <div v-html="supportText"></div>
</template>

<script setup>
import { computed } from "vue";
import { useData } from "vitepress";

const { theme } = useData();
const supportText = computed(() => theme.value.ui?.supportUs?.text ?? "");

</script>
