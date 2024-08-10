<script setup lang="ts">
import {useMouse } from './Mouse';
const {x, y} = useMouse();
</script>

<template>
    <h1>鼠标跟踪器</h1>
    <p>Mouse position is at: <{{ x }}, {{ y }}></p>
</template>

<style scoped></style>