<script setup>
import { ref, reactive } from 'vue';

// 组件逻辑
// 此处声明一些响应式状态

// reactive() 只适用于对象 (包括数组和内置类型，如 Map 和 Set)
const counter = reactive( {
  count: 0
});

// ref() 则可以接受任何值类型。ref 会返回一个包裹对象，并在 .value 属性下暴露内部值
const message = ref('Hello World');

</script>

<template>
  <h1>Make me dynamic!</h1>
  <!-- 在组件的 <script setup> 块中声明的响应式状态，可以直接在模板中使用 -->
  <p>{{ message }}</p>
  <p> Count is: {{ counter.count }} </p>
</template>