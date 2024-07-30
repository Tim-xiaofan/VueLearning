<script setup lang="ts">
const [model, modifiers] = defineModel({
    set(value: string): string {
        if(modifiers.capitalize) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
});

console.log('modifiers: ', modifiers);
</script>

<template>
    <input v-model="model"/>
</template>

<style scoped></style>