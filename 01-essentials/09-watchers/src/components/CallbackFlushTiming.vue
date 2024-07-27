<script setup lang="ts">
import { ref, watch, onMounted, watchEffect, watchPostEffect, watchSyncEffect } from 'vue';

const count = ref(0);
const pElementRef = ref(null);

function do_callback(info:string, newCount:number, oldCount:number) {
  console.log(`${info}: newCount: ${newCount}, oldCount: ${oldCount}, pElementRef: ${pElementRef.value.textContent}`);
}

// 组件更新前
watch(
  count,
  (newCount, oldCount) => {
    if (pElementRef.value) {
      do_callback('Default watcher(watch)', newCount, oldCount);
    }
  }
);
watchEffect(
  () => {
    if(pElementRef.value) {
      do_callback('Default watcher(watchEffect)', count.value, count.value);
    }
  }
);

// 组件更新后
watch(
  count,
  (newCount, oldCount) => {
    if (pElementRef.value) {
      do_callback('Post watcher(watch)', newCount, oldCount);
    }
  },
  {flush: 'post'}
);

watchEffect(
  () => {
    if(pElementRef.value) {
      do_callback('Post watcher(watchEffect)', count.value, count.value);
    }
  },
  {flush: 'post'}
);

watchPostEffect(
  () => {
    if(pElementRef.value) {
      do_callback('Post watcher(watchPostEffect)', count.value, count.value);
    }
  },
);

// 同步触发的侦听器，它会在 Vue 进行任何更新之前触发
watch(
  count,
  (newCount, oldCount) => {
    if (pElementRef.value) {
      do_callback('Sync watcher(watch)', newCount, oldCount);
    }
  },
  {flush: 'sync'}
);

watchEffect(
  () => {
    if(pElementRef.value) {
      do_callback('Sync watcher(watchEffect)', count.value, count.value);
    }
  },
  {flush: 'sync'}
);

watchSyncEffect(
  () => {
    if(pElementRef.value) {
      do_callback('Sync watcher(watchSyncEffect)', count.value, count.value);
    }
  },
);

</script>

<template>
  <h1>回调的触发时机</h1>
  <p>默认情况下，侦听器回调会在父组件更新 (如有) 之后、所属组件的 DOM 更新之前被调用。这意味着如果你尝试在侦听器回调中访问所属组件的 DOM，那么 DOM 将处于更新前的状态</p>

  <p ref="pElementRef">count: {{ count }}</p>

  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
p {
  border: solid black 3px;
  padding: 8px;
}
</style>