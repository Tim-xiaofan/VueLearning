<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
    <div>
        <h1>A Child Component!</h1>
        <button @click="count++"> Count is: {{ count }}</button>
    </div>
</template>

<style scoped>
div {
    border: solid black 2px;
    border-radius: 5px;
    background-color: aliceblue;
    padding: 1em;
}
</style>