<script setup lang="ts">
import { ref, onMounted } from 'vue';
// 声明触发的事件
const emit = defineEmits(['response']);

const bRef = ref(null);

onMounted(() => {
    console.log('bRef: ', bRef.value);
    const handler = (e) => {
        let b = e.srcElemt || e.target;
        console.log('b: ', b);
        // 带参数触发
        emit('response', 'Hello from child');
        b.removeEventListener('click', handler);
    };
    bRef.value.addEventListener('click', handler);
});

</script>

<template>
    <button ref="bRef">emit</button>
</template>

<style scoped></style>