<script setup lang="ts">
import { ref } from 'vue';
const items = ref([
  { name: 'Tom', age: '9', hobby: ['A', 'B', 'C'] },
  { name: 'Jerry', age: '8', hobby: ['1', '2', '3'] }]);
</script>

<template>
  <h1>v-for</h1>

  <h3>item in items</h3>
  <li v-for="item in items">
    {{ item.name }}, {{ item.age }}
  </li>

  <h3>(item, index) in items</h3>
  <li v-for="(item, index) in items">
    {{ index }}: {{ item.name }}, {{ item.age }}
  </li>

  <h3>嵌套</h3>
  <ul>
    <li v-for="item of items">
      {{ item.name }}
      <ul>
        <li v-for="h in item.hobby">
          {{ h }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped></style>