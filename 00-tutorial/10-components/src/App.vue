<script setup lang="ts">
// 导入子组件
import ChildComp from './components/ChildComp.vue';
</script>

<template>
  <div>
    <h1>A Parent Component!</h1>
    <!-- 使用子组件 -->
    <ChildComp />
  </div>
</template>

<style scoped>
div {
  background-color: aqua;
  border: groove green 3px;
  border-radius: 10px;
  padding: 1em;
}
</style>