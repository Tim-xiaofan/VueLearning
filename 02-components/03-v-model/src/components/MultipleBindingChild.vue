<script setup lang="ts">
const firstName = defineModel('firstName', {required: true});
const lastName = defineModel('lastName', {required: true});
</script>

<template>
    <input v-model="firstName" />
    <input v-model="lastName"/>
</template>

<style scoped></style>