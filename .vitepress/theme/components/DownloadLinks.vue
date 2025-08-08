<template>
  <div>
    <LinkGrid :items="downloadMethod" />
  </div>
</template>

<script setup>
import { useUrlSearchParams } from "@vueuse/core";
import { onMounted } from "vue";

function clientLink(method) {
  return {
    id: method.id,
    name: method.text,
    secondary: method.subText || "",
    icon: method.icon,
    link: method.link,
    lanzouLink: method.lanzouLink,
    quarkLink: method.quarkLink,
    target: method.link && method.link.startsWith("http") ? "_blank" : "_self",
  };
}

function downloadJump(params, downloadMethod) {
  if (!params.q) {
    return;
  }

  const target = Array.isArray(params.q)
    ? params.q[0].toLowerCase()
    : params.q.toLowerCase();

  downloadMethod.forEach((val) => {
    if (val.id === target) {
      if (val.link) {
        location.href = val.link;
      }
    }
  });
}

const props = defineProps({
  methods: { type: Array, default: () => [] },
});

const params = useUrlSearchParams("history");

const downloadMethod = props.methods.map((method) => clientLink(method));

onMounted(() => {
  downloadJump(params, downloadMethod);
});
</script>
