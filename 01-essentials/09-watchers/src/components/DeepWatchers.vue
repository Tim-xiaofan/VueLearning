<script setup lang="ts">
import { reactive, watch, ref, onMounted } from 'vue';

const obj = reactive({ count: 0 });

// 直接给 watch() 传入一个响应式对象，会隐式地创建一个深层侦听器—
watch(obj, (newValue, oldValue) => {
  // 在嵌套的属性变更时触发
  // 注意：`newValue` 此处和 `oldValue` 是相等的
  // 因为它们是同一个对象！
  alert(`reactive object: newValue: ${newValue.count}, oldValue: ${oldValue.count}`);
});

// 一个返回响应式对象的 getter 函数，只有在返回不同的对象时，才会触发回调
const state = reactive({ someObject: { id: 1100 } });
watch(() => state.someObject,
  () => {
    // 仅当 state.someObject 被替换时触发
    alert('getter');
  }
);

// 替换 state.someObject
function replace():void {
  state.someObject = {id: 2200};
}

</script>

<template>
  <h1>深层侦听器</h1>
  <button @click="obj.count++">Count</button>
  <!-- 不会触发回调函数 -->
  <button @click="state.someObject.id++">Increase</button>
  <!-- 触发回调函数 -->
  <button @click="replace">Replace</button>
</template>

<style scoped></style>