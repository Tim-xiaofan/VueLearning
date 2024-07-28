<script setup lang="ts">
import { ref } from 'vue';
import BlogPost from './BlogPost.vue';
const posts = ref([
    { id: 1, title: 'My journey with Vue' },
    { id: 2, title: 'Blogging with Vue' },
    { id: 3, title: 'Why Vue is so fun' }
]);
</script>

<template>
    <h1>Props 声明</h1>
    <pre>
        一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute
    </pre>
    <BlogPost v-for="post in posts" :id="post.id" :title="post.title" />
</template>

<style scoped></style>