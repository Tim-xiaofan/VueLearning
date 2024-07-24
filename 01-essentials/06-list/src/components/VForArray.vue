<script setup lang="ts">
import { computed, ref } from 'vue';
const numbers = ref([0, 1, 2, 3, 4, 5]);
const inputText = ref('');

const names = ref(['Tom', 'Jerry', 'Spike'])
function replaceArray(): void {
  names.value = inputText.value.split(' ');
  inputText.value = ''
}

const odd = ref(false);
const filteredNumbers = computed(() => {
  if(odd.value) {
    return numbers.value.filter((item) => {
      return item % 2 == 1;
    })
  } else {
    return numbers.value.filter((item) => {
      return item % 2 == 0;
    })
  }
});

const messNumbers = ref([9, 5, 2, 7, 1, 4, 5]);
</script>

<template>
  <h1>数组变化侦测</h1>
  <h3>增减</h3>
  <button @click="numbers.push(numbers.length)">Push</button>
  <button @click="numbers.pop()">Pop</button>
  <ul>
    <li v-for="n in numbers">{{ n }}</li>
  </ul>

  <h3>替换</h3>
  <form @submit.prevent="replaceArray">
    <input type="text" v-model="inputText" required placeholder="New Array Content" />
    <button type="submit">Replace</button>
  </form>
  <ul>
    <li v-for="n in names">{{ n }}</li>
  </ul>

  <h3>过滤: {{ numbers }}</h3>
  <button @click="odd = !odd">Show {{ odd ? 'Even': 'Odd' }}</button>
  <ul>
    <li v-for="n in filteredNumbers">{{ n }}</li>
  </ul>

  <h3>排序: {{ messNumbers }}</h3>
  <button @click="messNumbers.sort()">Sort</button>
  <ul>
    <li v-for="n in messNumbers">{{ n }}</li>
  </ul>
</template>

<style></style>