<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
const dynamicId = ref('dynamic');
</script>

<template>
  <div v-bind:id="dynamicId"> <!-- 动态id -->
    <!-- mustache 语法 (即双大括号) 只能用于文本插值。为了给 attribute 绑定一个动态值，需要使用 v-bind 指令 -->
    <h1 v-bind:class="titleClass">Make me red</h1> <!-- 此处添加一个动态 class 绑定 -->
  </div>
</template>

<style>
.title {
  color: red;
}

#dynamic {
  background-color: aliceblue;
  border: groove black 3px;
  border-radius: 5px;
  padding: 1em;
}
</style>