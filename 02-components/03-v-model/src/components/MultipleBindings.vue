<script setup lang="ts">
import { ref } from 'vue';
import MultipleBindingChild from './MultipleBindingChild.vue';
const firstName = ref('');
const lastName = ref('')
</script>

<template>
    <h1>多个 v-model 绑定</h1>
    <p>{{ firstName }}, {{ lastName }}</p>
    <MultipleBindingChild 
        v-model:firstName="firstName"
        v-model:lastName="lastName"
    />
</template>

<style scoped></style>