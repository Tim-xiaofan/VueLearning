<script setup>
import BasicExample from './components/BasicExample.vue';
import DeepWatchers from './components/DeepWatchers.vue';
import EagerWatchers from './components/EagerWatchers.vue';
import OnceWatchers from './components/OnceWatchers.vue';
import watchEffect from './components/watchEffect.vue';
import CallbackFlushTiming from './components/CallbackFlushTiming.vue'
</script>

<template>
  <BasicExample/>
  <DeepWatchers/>
  <EagerWatchers/>
  <OnceWatchers/>
  <watchEffect/>
  <CallbackFlushTiming/>
</template>

<style scoped></style>