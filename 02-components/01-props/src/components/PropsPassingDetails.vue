<script setup lang="ts">
import { ref } from 'vue';
import BlogPost from './BlogPost.vue';
import { time } from 'console';
import { generateKey } from 'crypto';

function generate_random_string(n: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }

  return result;
}

let id:number = 1;
const posts = ref([
    { id: id++, title: 'My journey with Vue' },
    { id: id++, title: 'Blogging with Vue' },
    { id: id++, title: 'Why Vue is so fun' }
]);

function pushPost(event: MouseEvent):void {
    posts.value.push({id: id++, title: generate_random_string(15)})
}

function popPost(event: MouseEvent):void {
    posts.value.pop();
}

</script>

<template>
    <h1>传递 prop 的细节</h1>
    <h3>动态 Props </h3>
    <button @click="pushPost">Push post</button>
    <button @click="popPost">Pop post</button>
    <BlogPost v-for="post in posts" :id="post.id" :title="post.title" />

    <h3>使用一个对象绑定多个 prop</h3>
    <BlogPost v-for="post in posts" v-bind="post"/>
</template>

<style></style>