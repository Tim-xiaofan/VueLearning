<script setup lang="ts"></script>

<template>
  <div class="alert-box">
    <strong>This is an Error for Demo Purposes</strong>
    <!-- 使用 <slot> 作为一个占位符，父组件传递进来的内容就会渲染在这里 -->
    <br />
    <slot />
  </div>
</template>

<style scoped>
div.alert-box {
  color: #666;
  border: 1px solid red;
  border-radius: 4px;
  padding: 20px;
  background-color: #f8f8f8;
}

div.alert-box>strong {
  color: red;
}
</style>