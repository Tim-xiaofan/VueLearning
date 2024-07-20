<script setup lang="ts">
import { ref } from 'vue';
import ChildComp from './components/ChildComp.vue';

const msg = ref('from parent');
</script>

<template>
  <ChildComp> 
    {{ msg }} : This is some slot content!
  </ChildComp>
</template>

<style scoped></style>