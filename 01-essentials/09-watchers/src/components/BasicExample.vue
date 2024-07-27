<script setup lang="ts">
import { ref, watch } from 'vue';
const question = ref('');
const answer = ref('Question usually constain a question mark. ;-');
const img_answer = ref('');
const loading = ref(false);

const x = ref(0);
const y = ref(0);

function number_generator(): number {
  return Math.random() * 100;
}

function refresh_xy(): void {
  x.value = number_generator();
  y.value = number_generator();
}

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true;
    answer.value = 'Thinking...';
    try {
      const res = await fetch('https://yesno.wtf/api');
      const jstr = (await res.json())
      answer.value = jstr.answer;
      img_answer.value = jstr.image;
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error;
    } finally {
      loading.value = false;
    }
  }
});

// 单个 ref
watch(x, (newX) => {
  console.log(`x is ${newX}`);
});

// getter 函数
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`);
  }
);

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})

</script>

<template>
  <h1>基本实例</h1>
  <p>
    Ask a yes/no question:
    <!-- fetch 是禁用编辑 -->
    <input v-model="question" :disabled="loading" />
  </p>
  <p>{{ answer }}</p>
  <img :src="img_answer" alt="img_answer" v-if="!loading" />

  <h3>侦听数据源类型</h3>
  <button @click="refresh_xy">Refresh</button>
</template>

<style scoped></style>