<script setup lang="ts">
import { ref } from 'vue';
import Card from './Card.vue';

const menus = ref(['主页', '新闻', '关于']);

function menuClick(event: MouseEvent): void {
    alert(`${event.target.textContent}`);
}
</script>

<template>
    <h1>条件插槽</h1>
    <p>通过 v-if 和 $slots 实现 </p>
    <Card>
        <template v-slot:header>
            <ul class="menus">
                <li v-for="menu in menus" class="menu" @click="menuClick">{{ menu }}</li>
            </ul>
        </template>

        <!--简写 #name-->
        <template #default>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
        </template>

        <template #footer>
            <p>Here's some contact info</p>
        </template>
    </Card>
</template>

<style scoped>
.menus {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.menu {
    margin: 0;
    display: inline-block;
    padding: 0.5em;
}

.menu:hover {
    cursor: pointer;
    background-color: #98bf21;
}
</style>