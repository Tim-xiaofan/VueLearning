<script setup lang="ts">
import { reactive, ref } from 'vue'
const myObject = reactive({
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
});
</script>

<template>
    <h1>v-for 与对象</h1>
    <h3> value in object</h3>
    <ul>
        <li v-for="value in myObject">
            {{ value }}
        </li>
    </ul>
    <h3> (key, value) in object</h3>
    <ul>
        <li v-for="(value, key) in myObject">
           {{ key }}:  {{ value }}
        </li>
    </ul>
</template>

<style scoped></style>