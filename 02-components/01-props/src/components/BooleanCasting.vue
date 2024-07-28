<script setup lang="ts">
import BlogPost from './BlogPost.vue';
</script>

<template>
    <h1>Boolean 类型转换</h1>
    <BlogPost v-bind="{ id:0, title:'ChatGTP' }" />
    <BlogPost v-bind="{ id:1, title:'Stable Diffusion' }" disable />
    <BlogPost v-bind="{ id:2, title:'Copilot' }" :disable="true" />
</template>
<style scoped></style>