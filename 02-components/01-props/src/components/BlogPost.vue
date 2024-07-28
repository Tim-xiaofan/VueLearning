<script setup lang="ts">
// 使用字符数组
// defineProps(['id', 'title']);
// 使用对象
// key 是 prop 的名称，而值则是该 prop 预期类型的构造函数
defineProps({
    id: {
        type:Number,
        // required: true  props 的校验要求
    },
    title: String,
    disable: Boolean
});
</script>

<template>
    <h3>{{ id }} : {{ title }}</h3>
    <p v-if="disable">Disable</p>
</template>

<style scoped></style>