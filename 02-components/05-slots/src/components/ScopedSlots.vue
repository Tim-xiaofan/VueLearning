<script setup lang="ts">
import ScopedSlotsChild from './ScopedSlotsChild.vue';
</script>

<template>
    <h1>作用域匿名插槽</h1>
    <ScopedSlotsChild v-slot="slotProps">
        {{ slotProps.text }} {{ slotProps.count }}
    </ScopedSlotsChild>
    <!-- 使用解构语法 -->
    <ScopedSlotsChild v-slot="{text, count}">
        {{ text }} {{ count }}
    </ScopedSlotsChild>
</template>

<style></style>