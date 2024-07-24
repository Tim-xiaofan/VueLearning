<script setup lang="ts">
import { ref } from 'vue';
const todoList = ref([
  { task: '起床', completed: true },
  { task: '洗漱', completed: false },
  { task: '吃早餐', completed: false },
]);
const bad = ref(false);
</script>

<template>
  <h1>v-for 和 v-if</h1>
  <p>当它们同时存在于一个节点上时，v-if 比 v-for 的优先级更高。这意味着 v-if 的条件将无法访问到 v-for 作用域内定义的变量别名</p>
  <button @click="bad = !bad">Toggle</button>
  <!-- 这会抛出一个错误，因为属性 todo 此时
  没有在该实例上定义 -->
  <ul class="bad" v-if="bad">
    <li v-for="todo of todoList" v-if="!todo.completed">
      {{ todo.task }}
    </li>
  </ul>
  <ul class="good" v-else>
    <template v-for="todo in todoList">
      <li v-if="!todo.completed">{{ todo.task }}</li>
    </template>
  </ul>
</template>

<style></style>