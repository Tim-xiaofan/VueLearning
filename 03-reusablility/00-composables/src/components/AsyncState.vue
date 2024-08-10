<script setup lang="ts">
import { ref } from 'vue';
import { useFetch } from './fetch';

const error = ref<string | null>(null);
const data = ref<string | null>(null);

const url = 'https://yesno.wtf/api';

async function loadData(url: string): Promise<void> {
    try {
        const res = await fetch(url);
        data.value = await res.json();
    } catch (e: any | unknown) {
        data.value = null;
        error.value = e;
    }
}

loadData(url);
const { data: data1, error: error1 } = useFetch(url); //解构重命名
</script>

<template>
    <h1>异步状态管理</h1>
    <h3>组件中</h3>
    <div v-if="error"> Oops! Error encountered: {{ error }}</div>
    <div v-else-if="data">
        <p>Data: {{ data }} </p>
        <img :src="data.image" />
    </div>
    <div v-else>Load...</div>

    <h3>组合式函数</h3>
    <div v-if="error1"> Oops! Error encountered: {{ error1 }}</div>
    <div v-else-if="data1">
        <p>Data: {{ data1 }} </p>
        <img :src="data1.image" />
    </div>
    <div v-else>Load...</div>
</template>

<style>
button:hover {
    cursor: pointer;
}
</style>