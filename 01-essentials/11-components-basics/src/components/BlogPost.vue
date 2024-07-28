<script setup lang="ts">
defineProps(['title']);
// 申明要抛出的事件
defineEmits(['enlarge-text', 'reduce-text']);
</script>

<template>
  <h4>{{ title }}</h4>
  <!-- 子组件可以通过调用内置的 $emit 方法，通过传入事件名称来抛出一个事件 -->
  <button @click="$emit('enlarge-text')">Enlarge text</button>
  <button @click="$emit('reduce-text')">Reduce text</button>
</template>

<style scoped></style>