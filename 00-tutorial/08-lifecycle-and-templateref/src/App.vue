<script setup>
import { ref, onMounted } from 'vue';
// 注意这个 ref 使用 null 值来初始化。
// 这是因为当 <script setup> 执行时，DOM 元素还不存在。
// 模板引用 ref 只能在组件挂载后访问
const pElementRef = ref(null);

onMounted(() => {
  // 此时组件已挂载
  pElementRef.value.textContent += ' World';
});

</script>

<template>
  <!-- 个特殊的 ref attribute -->
  <p ref="pElementRef"> Hello </p>
</template>

<style scoped>
</style>