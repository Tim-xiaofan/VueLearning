<script setup lang="ts">
import { ref } from 'vue';
let id:number = 0;
const items = ref([
  {id: id++, name: 'Tom'},
  {id: id++, name: 'Jerry'},
  {id: id++, name: 'Spike'}
]);
</script>

<template>
  <h1>通过 key 管理状态</h1>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
}
</style>