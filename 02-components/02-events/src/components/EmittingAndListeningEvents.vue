<script setup lang="ts">
import MyComponent from './MyComponent.vue';

function onSomeEvent(event) {
    alert('someEvent')
}
</script>

<template>
    <h1>触发与监听事件</h1>
    <MyComponent  @some-event="onSomeEvent"/>
    <MyComponent  v-on:some-event.once="onSomeEvent"/>
</template>

<style scoped></style>