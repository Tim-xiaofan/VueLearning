<script setup lang="ts"></script>

<template>
    <h1>在 v-for 里使用范围值</h1>
    <span v-for="n in 10">{{ n }}</span>
    <ul>
        <li v-for="n in 9"> {{ n }}</li>
    </ul>
    <ul class="inline">
        <li v-for="n in 9"> {{ n }}</li>
    </ul>
</template>

<style scoped>
span {
    padding: 6px;
}

ul.inline {
    list-style-type: none;
    margin: 0;
}

ul.inline > li {
    display: inline-block;
    padding: 6px;
}
</style>