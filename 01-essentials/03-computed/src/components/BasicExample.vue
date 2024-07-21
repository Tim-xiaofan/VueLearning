<script setup lang="ts">
import { reactive, computed } from 'vue';
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
});

// 一个计算属性ref
const publishedBookMessgae = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No';
}); 
console.log('publishedBookMessgae: ', publishedBookMessgae);
</script>

<template>
  <h1>基础属性</h1>
  <h3>模板</h3>
  <p>Has published books:</p>
  <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
  <h3>计算属性</h3>
  <p>Has published books:</p>
  <span>{{ publishedBookMessgae }}</span>
</template>

<style scoped></style>