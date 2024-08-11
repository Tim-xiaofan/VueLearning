<script setup lang="ts">
import {ref, type VNode} from 'vue';
const vExample = {
    mounted: (el:Element, binding:object, vnode:VNode) => {
        console.log('vExample: el=', el);
        console.log('vExample: binding=', binding);
    }
};

const baz = ref<boolean>(true);

const arg = ref('dynamic-arg');
</script>

<template>
    <div v-example:foo.bar="baz"></div>
    <!-- 和内置指令类似，自定义指令的参数也可以是动态的 -->
    <div v-example:[arg].bar="baz"></div>
</template>

<style scoped></style>