<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('Template Syntax');
setInterval(() => { msg.value = `${new Date()}` }, 1000);

const rawHtml = ref('<span style="color: red">This should be red.</span>');

const dynamicId = ref('v-bind');

const isButtonDisabled = ref(false);

// 动态绑定多个值 
const objectOfAttrs = {
  id: 'container',
  class: 'wrap',
  stype: 'background-color:green'
};

</script>

<template>

  <h1>文本插值</h1>
  <!-- 文本插值: 自动更新 -->
  <span>Message: {{ msg }}</span>

  <h1>原始 HTML</h1>
  <!-- v-html指令：原始 HTML -->
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>

  <!-- Attribute 绑定 -->
  <div v-bind:id="dynamicId">
    <h2>双大括号不能在 HTML attributes 中使用。想要响应式地绑定一个 attribute，应该使用 v-bind 指令</h2>
  </div>
  <div :id="dynamicId">
    <h2>v-bind 简写：':属性'</h2>
  </div>

  <!-- 布尔型 Attribute -->
  <button :disabled="isButtonDisabled">Button</button>

  <div v-bind="objectOfAttrs">包含多个 attribute 的 JavaScript 对象绑定到单元素</div>

</template>

<style scoped>
#v-bind {
  border: groove greenyellow 5px;
  background-color: aquamarine;
  border-radius: 5px;
}

#container {
  border: dashed black 5px;
  border-radius:10px
}
</style>