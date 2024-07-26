<script setup lang="ts">
import { ref } from 'vue';

const lazyMsg = ref('')
const age = ref(0);
const msg = ref('');
</script>

<template>
  <h1>修饰符</h1>

  <h3>.lazy 在 "change" 事件后同步更新而不是 "input" </h3>
  <p>lazy: '{{ lazyMsg }}'</p>
  <input type="text" v-model.lazy="lazyMsg" placeholder="Type here, then press enter"/>

  <h1>.number 用户输入自动转换为数字, 如果该值无法被 parseFloat() 处理，那么将返回原始值</h1>
  <p>age: {{ age }}</p>
  <input v-model.number="age" placeholder="Type the number here"/>

  <h3>.trim 自动去除用户输入内容中两端的空格</h3>
  <p>msg: '{{msg}}' </p>
  <input v-model.trim="msg" placeholder="Type here"/>
</template>

<style scoped></style>