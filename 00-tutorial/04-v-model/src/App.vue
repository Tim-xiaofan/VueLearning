<script setup>
import { ref } from 'vue'

const text = ref('');

function onInput(e) {
  text.value = e.target.value;
}
const text1 = ref('');
const s_option = ref('');
</script>

<template>
  <input :value="text" @input="onInput" placeholder="Type here">
  <p>{{ text }}</p>

  <!-- 为了简化双向绑定，Vue 提供了一个 v-model 指令 -->
  <!-- v-model 会将被绑定的值与 <input> 的值自动同步，这样我们就不必再使用事件处理函数了 -->
  <input v-model="text1" placeholder="Type here">
  <p>{{ text1 }}</p>

  <select v-model="s_option">
    <option value="" selected disabled hidden>Choose here</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </select>
  <p>{{ s_option }}</p>
</template>