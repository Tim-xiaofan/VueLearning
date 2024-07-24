<script setup lang="ts">
const props = defineProps({
  title: String
});
// 声明触发的事件
defineEmits(['remove']);
</script>
<template>
  <li>
    {{ title }}
    <!-- 模板使用 built-in Vue method -->
    <button @click="$emit('remove')">Remove</button>
  </li>
</template>

<style scoped></style>