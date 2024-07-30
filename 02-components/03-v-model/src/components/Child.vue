<script setup lang="ts">
const model = defineModel<number>();

function increase(): void {
    model.value++;
}
</script>

<template>
    <p>Parent bound v-mode is: {{ model }}</p>
    <button @click="increase">Increase</button>
    <input type="text" v-model="model">
</template>

<style scoped></style>