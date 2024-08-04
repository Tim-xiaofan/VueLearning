<script setup lang="ts">
import { ref } from 'vue';

const greeting = ref('Hello');
const count = ref(1);
</script>

<template>
    <header>
        <slot name="header" v-bind:text="greeting" :count="count">Header</slot>
    </header>

    <main>
        <slot :text="greeting" :count="count">Main</slot>
        <button @click="++count">Count is: {{ count }}</button>
    </main>

    <footer>
        <slot name="footer" :text="greeting" :count="count">Footer</slot>
    </footer>
</template>

<style scoped></style>