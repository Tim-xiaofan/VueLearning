<script setup lang="ts">
import Markdown from './Markdown.vue';
import { ref } from 'vue';

const markdownContent = ref(`### Hello, Markdown!
\`\`\`c++
#include <iostream>;

int main(void)
{
  return 0;
}
\`\`\`
`);

const markdownContent1 = ref(
  `
\`\`\`typescript
function foo(n: number): string {
  return \`n\`;
}
\`\`\`
`
);

const markdownContentList = ref([markdownContent, markdownContent1]);
</script>

<template>
  <h1>定义和使用一个组件</h1>
  <h3>Markdown 组件： 渲染 markdown，高亮代码</h3>
  <!-- 传递 props -->
  <Markdown v-bind:markdownContent="markdownContent"></Markdown>
  <Markdown v-bind:markdownContent="markdownContent1"></Markdown>
  <h3>使用 v-for 渲染</h3>
  <Markdown v-for="markdownContent in markdownContentList"
    :markdownContent="markdownContent.value"
  />
</template>

<style scoped></style>