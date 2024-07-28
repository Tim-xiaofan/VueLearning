<script setup lang="ts">
import { Marked} from 'marked';
import { computed, ref } from 'vue';
import hljs from 'highlight.js';
import { markedHighlight } from "marked-highlight";
import 'highlight.js/styles/stackoverflow-dark.css'; // You can choose any highlight.js theme

const pros = defineProps({
  markdownContent: String,
});

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code:string, lang:string, info:string) {
      console.log(`highlight: code=${code}, lang: ${code}, info=: ${info}`);
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      console.log(`highlight: langage=${language}`);
      const res =  hljs.highlight(code, { language });
      console.log('res: ', res.value);
      return res.value;
    }
  })
);

const htmlContent = computed(() => {
  return marked.parse(pros.markdownContent);
});

console.log('props: ', pros.markdownContent);

</script>

<template>
  <div v-html="htmlContent"></div>
</template>

<style scoped></style>