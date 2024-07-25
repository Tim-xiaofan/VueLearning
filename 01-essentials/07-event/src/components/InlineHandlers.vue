<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

function say(message:string):void {
  alert(message);
}

function warn(message:string, event:any) {
  // 这里访问原生事件
  if(event) {
    event.preventDefault();
  } 
  alert(message);
}
</script>

<template>
  <h1>内联事件处理器</h1>
  <p>内联事件处理器通常用于简单场景</p>
  <button @click="count++">Count is: {{ count }}</button>

  <h3>在内联处理器中调用方法</h3>
  <button @click="say('hello')">Say hello</button>
  <button v-on:click="say('bye')">Say bye</button>

  <h3>在内联事件处理器中访问事件参数</h3>
  <!-- 使用特殊的 $event 变量 -->
  <button @click="warn('Form cannot be submitted yet', $event)">Submit</button>
  <!-- 使用箭头函数内联 -->
  <button @click="(event) => warn('Form cannot be submitted yet', event)">Submit</button>
</template>

<style scoped></style>