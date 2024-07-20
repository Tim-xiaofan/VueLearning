<script setup lang="ts">
import { ref } from 'vue';
const seen = ref(false);
setInterval(() => { seen.value = !seen.value }, 1000);

const url = ref('www.baidu.com');
const attributeName = ref('href');
const url1 = ref('https://www.baidu.com');
</script>

<template>
  <h1>指令 Directives</h1>
  <p>指令是带有 v- 前缀的特殊 attribute</p>
  <p v-if="seen">Now you seen me</p>

  <h2> 参数 Arguments </h2>
  <a v-bind:href="`https://${url}`" _target="blanck">百度</a>

  <h2>动态参数</h2>
  <!--
注意，参数表达式有一些约束，
参见下面“动态参数值的限制”与“动态参数语法的限制”章节的解释
-->
  <a v-bind:[attributeName]="url1"> Baidu </a>

  <!-- 简写 -->
  <a :[attributeName]="url1"> Baidu </a>
</template>

<style scoped>
a {
  border: solid black 2px;
  text-decoration: none;
  background-color: #eeee;
}
</style>