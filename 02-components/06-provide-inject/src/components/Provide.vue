<script setup lang="ts">
import { ref, provide, readonly } from 'vue';
import Inject from './Inject.vue';
import { keyStr, myInjectionKey } from './keys';

const count = ref(0);
provide('key', count);

const location = ref('North Pole');

function updateLocation() {
    location.value = 'South Pole';
}

provide('location', {
    location,
    updateLocation
});

provide(myInjectionKey, 'myInjectionKey');
provide(keyStr, 0); // 若提供的是非字符串值会导致错误
</script>

<template>
    <h1>Provide</h1>
    <Inject>
        <template #count>
            Count is: {{ count }}
        </template>
    </Inject>

    <h1>和响应式数据配合使用</h1>
    <h3>当提供 / 注入响应式的数据时，建议尽可能将任何对响应式状态的变更都保持在供给方组件中</h3>

    <h1>使用 Symbol 作注入名</h1>
</template>

<style scoped></style>