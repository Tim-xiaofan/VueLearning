<!-- 该组件被挂载时，会从模拟 API 中抓取 todo 数据，
 同时还有一个按钮可以改变要抓取的 todo 的 ID -->

<script setup lang="ts">

import { ref, watch } from 'vue';

const todoId = ref(1);
const todoData = ref(null);

async function fetchData() {
  todoData.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  todoData.value = await res.json();
}

watch(todoId, (newTodoID) => {
   // 没错，console.log() 是一个副作用
   console.log(`new todoId is: ${newTodoID}`);
});

watch(todoId, fetchData);

fetchData();

</script>

<template>
  <p> Todo id {{ todoId }}</p>
  <button @click="todoId++" :disabled="!todoData"> Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <!-- 标签 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体 -->
  <pre v-else> {{ todoData }}</pre>
</template>

<style scoped></style>