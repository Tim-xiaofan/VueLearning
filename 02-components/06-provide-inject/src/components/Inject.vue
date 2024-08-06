<script setup lang="ts">
import { inject, InjectionKey } from 'vue';
import { keyStr, myInjectionKey } from './keys';
const count = inject<number>('key');
const appName = inject<string>('appName');

// 如果没有祖先组件提供 "message"
// `value` 会是 "这是默认值"
const value = inject<string>('message', '这是默认值');
console.log('[Inject]: value=', value);

// 数据 + 更新方法
const {location, updateLocation} = inject('location');
console.log('[Inject]: location=', location);
console.log('[Inject]: updateLocation=', updateLocation);

// 按 Symbol 注入
const injected = inject<string>(myInjectionKey);
console.log('[Inject]: inject=', injected);

// 为 inject 标注类型
const text = inject<string>(keyStr);
console.log('text: ', text);
</script>

<template>
    <div>
        APP Name is: {{ appName }}  <br>
        <slot name="count"></slot> <br/>
        <button @click="++count">Increase count</button>
        <p>location: {{ location }}</p>
        <button @click="updateLocation">Update location</button>
    </div>
</template>

<style scoped></style>