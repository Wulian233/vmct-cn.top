<template>
  <div>
    <LinkGrid :items="downloadMethod" />
  </div>
</template>

<script setup>
import { useUrlSearchParams } from '@vueuse/core'
import { onMounted } from 'vue'

function clientLink(
  key,
  text,
  subText = '',
  icon,
  link
) {
  return {
    id: key,
    name: text,
    secondary: subText,
    icon: icon,
    link: link,
    target: link.startsWith('http') ? '_blank' : '_self',
  }
}

function downloadJump(params, downloadMethod) {
  const target = Array.isArray(params.q) ? params.q[0].toLowerCase() : params.q.toLowerCase()

  downloadMethod.forEach((val) => {
    if (val.id === target) {
      location.href = val.link
    }
  })
}

const props = defineProps({
  methods: { type: Array, default: () => [] }
})

const params = useUrlSearchParams('history')

const downloadMethod = props.methods.map(method =>
  clientLink(method.id, method.text, '', method.icon, method.link)
)

onMounted(() => {
  downloadJump(params, downloadMethod)
})
</script>
