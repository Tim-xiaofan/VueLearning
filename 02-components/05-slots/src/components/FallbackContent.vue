<script setup lang="ts">
import SubmitButton from './SubmitButton.vue';

function onClick(event: Event): void {
    alert(`${event.target.className}`);
}
</script>

<template>
    <h1>默认内容</h1>
    <h3>slot 未提供内容，将显示默认内容</h3>
    <SubmitButton @click="onClick" class="fallback-content"/>
    <SubmitButton @click="onClick" class="save">Save</SubmitButton>
</template>

<style scoped></style>