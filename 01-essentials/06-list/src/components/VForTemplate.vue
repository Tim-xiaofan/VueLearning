<script setup lang="ts">
import { ref } from 'vue';
const items = ref(['Tom', 'Jerry', 'Spike']);
</script>

<template>
  <h1>&lt; template &gt; 上的 v-for</h1>
  <p>与模板上的 v-if 类似，你也可以在 &lt;template&gt; 标签上使用 v-for 来渲染一个包含多个元素的块</p>
  <ul>
    <template v-for="item in items">
      <li>{{ item }}</li>
      <li class="divider" role="presentation"></li>
    </template>
  </ul>
</template>

<style scoped></style>