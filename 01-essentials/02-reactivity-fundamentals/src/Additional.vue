<script setup lang="ts">
import { ref, reactive } from 'vue';
// 一个 ref 会在作为响应式对象的属性被访问或修改时自动解包。换句话说，它的行为就像一个普通的属性
{
    const count = ref(0);
    const state = reactive({ count });

    console.log('additional:', state.count); // 0

    state.count = 1;
    console.log('additional:', count.value); // 1
}

// 如果将一个新的 ref 赋值给一个关联了已有 ref 的属性，那么它会替换掉旧的 ref
{
    const count = ref(1);
    const state = reactive({ count });

    state.count = ref(2);
    console.log('additional: ', state.count) // 2
    state.count++;
    // 原始 ref 现在已经和 state.count 失去联系
    console.log('additional: ', count.value) // 1
}

{
    // 与 reactive 对象不同的是，当 ref 作为响应式数组或原生集合类型 (如 Map) 中的元素被访问时，它不会被解包
    const books = reactive([ref('Vue 3 Guide')])
    // 这里需要 .value
    console.log(books[0].value)

    const map = reactive(new Map([['count', ref(0)]]))
    // 这里需要 .value
    console.log(map.get('count').value)
}
</script>

<template>
    <h1>额外的 ref 解包细节</h1>
</template>

<style scoped></style>