<script setup lang="ts">
import { computed, ref } from 'vue';
import Tab1 from './Tab1.vue';
import Tab2 from './Tab2.vue';

const tabs = { Tab1, Tab2 }; // names
console.log('DefiningAComponent: tabs=', tabs);
const currentTab = ref('Tab1');
</script>

<template>
  <button v-for="(_, tab) in tabs" @click="currentTab=tab" class="tab-button">{{ tab }}</button>
  <!-- currentTab 改变时组件也改变 -->
  <component :is="tabs[currentTab]"></component>
</template>

<style scoped>
.tab-button:hover {
  cursor: pointer;
}
</style>