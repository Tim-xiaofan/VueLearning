<script setup lang="ts">
import { ref, computed, watch } from 'vue';
const text = ref('')
const firstName = ref('John');
const lastName = ref('Doe');
const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value;
  },
  //setter
  set(newValue) {
    //  注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ');
  }
});

function onInput(e:any):void {
  fullName.value = e.target.value
}

</script>

<template>
  <h1>可写计算属性</h1>
  <p>计算属性默认是只读的: {{ fullName }}</p>
  <input @input="onInput" placeholder="Type here">
</template>

<style scoped></style>