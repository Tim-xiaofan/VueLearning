<script lang="ts" setup>
import { ref } from 'vue';
import NamedScopedSlotsChild from './NamedScopedSlotsChild.vue';
import FancyList from './FancyList.vue';

const apiUrl = ref('https://jsonplaceholder.typicode.com/todos/');
</script>

<template>
    <h1>名作用域插槽</h1>
    <NamedScopedSlotsChild>
        <template v-slot:header="headerProps">
            {{ headerProps.text }} {{ headerProps.count }}
        </template>

        <template #default="{ text, count }">
            {{ text }} {{ count }}
        </template>

        <template #footer="{ text, count }">
            {{ text }} {{ count }}
        </template>
    </NamedScopedSlotsChild>

    <h1>高级列表组件示例</h1>
    <FancyList :api-url="apiUrl" :per-page="10">
        <template v-slot:item="{ item }">
            <div class="item">
                <p>{{ item.title }}</p>
                <p class="meta">by {{ item.id }} {{ item.completed }}</p>
            </div>
        </template>
    </FancyList>
</template>

<style scoped>
.meta {
    font-size: 0.8em;
    color: #42b883;
}
</style>