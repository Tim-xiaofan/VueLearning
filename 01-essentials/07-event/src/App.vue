<script setup lang="ts">
import InlineHandlers from './components/InlineHandlers.vue';
import EventModifiers from './components/EventModifiers.vue';
import KeyModifiers from './components/KeyModifiers.vue';
import MouseButtonModifiers from './components/MouseButtonModifiers.vue';
import MethodHandlers from './components/MethodHandlers.vue';
</script>

<template>
  <MethodHandlers/>
  <InlineHandlers/>
  <EventModifiers/>
  <KeyModifiers/>
  <MouseButtonModifiers/>
</template>

<style scoped></style>