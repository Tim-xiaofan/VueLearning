<script setup lang="ts">
import { computed, ref } from 'vue'
type TodoItem = {
    userId: string,
    id: number,
    title: string,
    completed: false
};

const props = defineProps({
    apiUrl: { type: String, required: true },
    perPage: { type: Number, required: true }
});

console.log('props:', props);
const items = ref<TodoItem[]>([]);

// 获取items
(async () => {
    try {
        const url = `${props.apiUrl}`;
        console.log('url:', url);
        const res = await fetch(url);
        const todos: TodoItem[] = await res.json();
        items.value = [];
        console.log('todos: ', todos.length);
        console.log('perPage: ', props.perPage);
        for (let i = 0; i < props.perPage && i < todos.length; ++i) {
            items.value.push(todos[i]);
        }
    } catch (err) {
        console.log('err: ', err);
    } finally {
        console.log('computed: items=', items);
    }
})();

console.log('items:', items);

</script>

<template>
    <ul class="todos">
        <li v-for="item in items" :key="item.id" class="todo-item">
            <slot name="item" :item="item">placeholder</slot>
        </li>
    </ul>
</template>

<style scoped>
ul.todos {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li.todo-item {
    padding: 2px;
    margin-bottom: 2px;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    color: #fff;
}
</style>