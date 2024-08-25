<script setup>
import { useData } from 'vitepress'
import StaffHero from './StaffHero.vue'
import StaffList from './StaffList.vue'
import staffWeb from './staff-web.json'
import staffVM from './staff-vm.json'
import staffCommunity from './staff-community.json'
const { theme } = useData()
</script>

<template>
  <div class="StaffPage">
    <StaffHero>
      <template #title>{{ theme.staff.title }}</template>
      <template #lead>
        <span class="nowrap">{{ theme.staff.desc }}</span>
      </template>
    </StaffHero>

    <StaffList :members="staffWeb">
      <template #title>{{ theme.staff.webStaff.title }}</template>
    </StaffList>
    <StaffList :members="staffCommunity">
      <template #title>{{ theme.staff.communityStaff.title }} </template>
    </StaffList>
    <StaffList :members="staffVM">
      <template #title>{{ theme.staff.vmStaff.title }}</template>
    </StaffList>
  </div>
</template>

<style scoped>
.StaffPage {
  padding-bottom: 16px;
}

@media (min-width: 768px) {
  .StaffPage {
    padding-bottom: 96px;
  }
}

.StaffList + .StaffList {
  padding-top: 64px;
}
</style>
