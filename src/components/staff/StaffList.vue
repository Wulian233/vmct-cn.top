<script setup>
import { computed } from 'vue'

const props = defineProps({
  members: Array
})

const sortedMembers = computed(() => {
  const sorted = [...props.members]

  sorted.sort((a, b) => {
    const orderA = a.order !== undefined ? a.order : Number.MIN_SAFE_INTEGER
    const orderB = b.order !== undefined ? a.order : Number.MIN_SAFE_INTEGER

    return orderA - orderB
  })

  return sorted
})
</script>

<template>
  <section class="staffList">
    <div class="container">
      <div class="info">
        <h2 class="title">
          <slot name="title" />
        </h2>
        <p class="lead">
          <slot name="lead" />
        </p>
      </div>

      <div class="members">
        <!-- to skip SSG since the members are shuffled -->
        <ClientOnly>
          <div
            v-for="(member, index) in sortedMembers"
            :key="member.name"
            class="member"
          >
            <p class="member-name">{{ member.name }}</p>
            <p v-if="member?.title" class="member-title">{{ member.title }}</p>
            <div
              v-if="
                member.title === undefined &&
                sortedMembers[
                  index < sortedMembers.length
                    ? index + 1
                    : sortedMembers.length
                ]?.title !== undefined
              "
              class="break-line"
            ></div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 768px) {
  .staffList {
    padding: 0 32px;
  }
}

.container {
  border-top: 1px solid var(--vp-c-divider-light);
  padding-top: 24px;
}

@media (min-width: 768px) {
  .container {
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    max-width: 960px;
  }
}

.info {
  flex-shrink: 0;
  padding: 0 24px;
  max-width: 512px;
}

@media (min-width: 768px) {
  .info {
    position: sticky;
    top: calc(var(--vp-layout-top-height, 0px) + 32px);
    left: 0;
    padding: 0 24px 0 0;
    width: 128px;
  }
}

@media (min-width: 960px) {
  .info {
    top: calc(var(--vp-layout-top-height, 0px) + 88px);
    padding: 0 64px 0 0;
    width: 290px;
  }
}

.title {
  font-size: 20px;
  font-weight: 500;
}

.lead {
  padding-top: 8px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.members {
  padding-top: 24px;
}

@media (min-width: 768px) {
  .members {
    flex-grow: 1;
    padding-top: 16px;
  }
}

.member + .member {
  padding-top: 16px;
}

@media (min-width: 640px) {
  .member {
    margin: 0 auto;
    max-width: 592px;
  }
}

@media (min-width: 768px) {
  .member {
    margin: 0;
    max-width: 100%;
  }
}
.members {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.member {
  flex-basis: calc(25% - 26px); /* 25% width with 16px gutter between items */
  box-sizing: border-box;
  text-align: left; /* Adjust text alignment as needed */
  padding: 16px;
  display: flex;
  max-width: 140px;
  flex-direction: column;
  align-items: baseline;
}

.member p {
  margin: 0;
}

.member-name {
  font-size: 16px; /* Adjust the font size as needed */
  font-weight: bold;
}

.member-title {
  font-size: 14px; /* Adjust the font size as needed */
  color: var(--vp-c-text-2);
  align-self: flex-end; /* Align title to the end (bottom) of the flex container */
}
/* Add the following style to the child element you want to break onto a new line */
.break-line {
  flex-basis: 100%;
  width: 100%;
  box-sizing: border-box;
}
</style>
