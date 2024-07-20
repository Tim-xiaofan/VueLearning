<!-- 在 setup() 函数中手动暴露大量的状态和方法非常繁琐。
幸运的是，我们可以通过使用单文件组件 (SFC) 来避免这种情况。
我们可以使用 <script setup> 来大幅度地简化代码 -->
<script setup lang="ts">
import { ref } from 'vue';

// 在组合式 API 中，推荐使用 ref() 函数来声明响应式状态
const count = ref(0);
const typeinfo = ref(typeof count);
console.log('count: ', count);
console.log('count.value: ', count.value);

// 深层影响性
const obj = ref({
    nested: { count: 0 },
    arr: ['foo', 'bar']
});

function mutateDeeply() {
    // 以下都会按照期望工作
    obj.value.nested.count++;
    if (obj.value.nested.count < 20) {
        obj.value.arr.push('baz');
    }
}

setInterval(() => { mutateDeeply() }, 1000);

</script>

<template>
    <h1>声明响应式状态</h1>
    <p>typeinfo: {{ typeinfo }}</p>
    <button @click="count++">Count is: {{ count }}</button>
    <h3>深层响应性</h3>
    <p>Ref 会使它的值具有深层响应性。这意味着即使改变嵌套对象或数组时，变化也会被检测到: {{ obj }}</p>
</template>

<style scoped></style>