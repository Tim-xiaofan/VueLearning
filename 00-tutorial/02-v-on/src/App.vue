<script setup>
import { ref } from 'vue';

const count = ref(0);

function increment() {
  count.value++;
}

const count1 = ref(1000);
function decrement() {
  count1.value--;
}

const dynamicClass = ref('a-none');

</script>

<template>
  <div>
    <!-- 使此按钮生效 -->
    <button v-on:click="increment">Count is: {{ count }}</button>
    <!-- 简写语法 -->
    <button @click="decrement">Count is: {{ count1 }}</button>
    <a href="https://www.baidu.com" :class="dynamicClass">Baidu</a>
  </div>
</template>

<style>
button, a {
  display: block;
  cursor: pointer;
}

.a-none {
  text-decoration: none;
}

.a-none:hover {
  background-color: black;
  color: white;
}

</style>