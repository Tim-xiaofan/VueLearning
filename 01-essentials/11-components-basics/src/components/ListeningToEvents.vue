<script setup lang="ts">
import BlogPost from './BlogPost.vue';
import { ref } from 'vue';

let id = 0;
const posts = ref([
  { id: id++, title: 'My journey with Vue' },
  { id: id++, title: 'Blogging with Vue' },
  { id: id++, title: 'Why Vue is so fun' }
]);

const postFontSize = ref(1);

</script>

<template>
  <h1>监听事件</h1>
  <div :style="{fontSize: postFontSize + 'em'}">
    <!-- @ 监听子组件事件 -->
    <BlogPost 
      v-for="post in posts" 
      :key="post.id" 
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
      @reduce-text="postFontSize -= 0.1"
    />
  </div>
</template>

<style scoped>
</style>