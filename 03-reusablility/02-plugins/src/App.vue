<script setup lang="ts">
import { inject } from 'vue';

const i18n = inject('i18n');
console.log('i18n: ', i18n.greetings.hello);
</script>

<template>
    <h1>{{ $translate('greetings.hello') }}</h1>
    <h1>插件中的 Provide / Inject</h1>
</template>

<style scoped></style>