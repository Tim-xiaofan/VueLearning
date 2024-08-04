<script setup lang="ts">
import { ref } from 'vue';
import BaseLayout from './BaseLayout.vue';

const menus = ref(['主页', '新闻', '关于']);

function menuClick(event: MouseEvent): void {
    alert(`${event.target.textContent}`);
}
</script>

<template>
    <h1>具名插槽</h1>
    <p>&lt;slot&gt; 元素可以有一个特殊的 attribute name，用来给各个插槽分配唯一的 ID，以确定每一处要渲染的内容</p>
    <p>要为具名插槽传入内容，我们需要使用一个含 v-slot 指令的 &lt;template&gt; 元素，并将目标插槽的名字传给该指令 </p>
    <BaseLayout>
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
    </BaseLayout>
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