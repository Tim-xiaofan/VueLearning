<script setup lang="ts">
import { ref } from 'vue';
import BlogPost from './BlogPost.vue';
let id: number = 1;
const posts = ref([
    { id: id++, title: 'Tech' },
    { id: id++, title: 'Life' },
    { id: id++, title: 'PE' }
]);

const fontSize = ref(1);
</script>

<template>
    <h1>事件参数</h1>
    <p>有时候我们会需要在触发事件时附带一个特定的值, 可以给 $emit 提供一个额外的参数</p>
    <div :style="{fontSize: fontSize + 'em'}">
    <BlogPost 
        v-for="post in posts" 
        v-bind="post"
        @increase-by="fontSize += 1"
    />
    </div>
</template>

<style scoped></style>