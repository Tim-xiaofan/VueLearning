<script setup lang="ts">
import { reactive } from 'vue';
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
});

// 组件中
function calculateBooksMessage() {
  return author.books.length > 0 ? 'Yes' : 'No'
}

</script>

<template>
  <h1>计算属性 vs 方法</h1>
  <p>{{ calculateBooksMessage() }}</p>
</template>

<style scoped></style>