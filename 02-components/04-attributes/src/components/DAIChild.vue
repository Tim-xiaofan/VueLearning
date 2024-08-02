<!-- Disabling Atrribute Inheritance Child -->

<script setup lang="ts">
defineOptions({
    inheritAttrs: false // 禁用组件自动继承 Attributes
});
</script>

<template>
    <!-- 应用到指定元素中 -->
    <span> Fallthrough attribute: {{ $attrs }}</span> <br>
    <div class="btn-wrapper">
        <button class="btn" v-bind="$attrs" title="specific element">Click Me</button>
    </div>
</template>

<style scoped></style>