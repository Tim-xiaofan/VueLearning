<script setup lang="ts">
import SlotContentAndOutlet from './components/SlotContentAndOutlet.vue';
import FallbackContent from './components/FallbackContent.vue';
import NamedSlots from './components/NamedSlots.vue';
import ConditinalSlots from './components/ConditinalSlots.vue';
import DynamicSlotNames from './components/DynamicSlotNames.vue';
import ScopedSlots from './components/ScopedSlots.vue';
import NamedScopedSlots from './components/NamedScopedSlots.vue';
</script>

<template>
    <SlotContentAndOutlet />
    <FallbackContent />
    <NamedSlots />
    <ConditinalSlots />
    <DynamicSlotNames />
    <ScopedSlots />
    <NamedScopedSlots />
</template>

<style scoped></style>