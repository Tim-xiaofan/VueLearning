<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFetchReactive } from './useFetchReactive';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';
const id = ref<number>(1);
const todoUrl = computed(() => {
    return baseUrl + id.value;
});
const { data, error } = useFetchReactive(todoUrl);

let props = ref({
    todo: 1,
    get todoId() {
        return this.todo;
    },
});

console.log('props: ', props.value.todoId);

// 当 props.id 改变时重新 fetch
const { data: data1, error: error1 } = useFetchReactive(() => `${baseUrl}/${props.value.todoId}`)

</script>

<template>
    <h1>接受响应式状态</h1>
    <h3>接收 Ref</h3>
    <div><button @click="++id">Id is: {{ id }}</button></div>
    <div v-if="error"> Oops! Error encountered: {{ error }}</div>
    <div v-else-if="data">
        <p>Data loaded:
        <pre>{{ data }} </pre>
        </p>
    </div>
    <div v-else>Load...</div>

    <h3>接收 getter 函数</h3>
    <div><button @click="++props.todo">TodoId is: {{ id }}</button></div>
    <div v-if="error1"> Oops! Error encountered: {{ error1 }}</div>
    <div v-else-if="data1">
        <p>Data loaded:
        <pre>{{ data1 }} </pre>
        </p>
    </div>
    <div v-else>Load...</div>
</template>

<style scoped></style>