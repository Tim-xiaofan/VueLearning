<script setup lang="ts">
import { ref } from 'vue';

const picked = ref('');
const picked1 = ref('');
const toggle = ref('');
const selected = ref('');

const toggleStr = ref('');
const dynamicTrueValue = ref(1);
const dynamicFalseValue = ref(-1);

function updateTrueFalse() {
  dynamicFalseValue.value--;
  dynamicTrueValue.value++;
}
setInterval(updateTrueFalse, 1000);
const toggleStr1 = ref('');
</script>

<template>
  <h1>值绑定</h1>
  <div>
    <h3>单选：字符串</h3>
    <p> picked: {{ picked }}</p>
    <input type="radio" v-model="picked" value="a" id="a" />
    <label for="a">a</label>
    <input type="radio" v-model="picked" value="b" id="b" />
    <label for="b">b</label>
  </div>

  <div>
    <h3>单选：字符串</h3>
    <p> picked: {{ picked1 }}</p>
    <input type="radio" v-model="picked1" value="A" id="A" />
    <label for="A">A</label>
    <input type="radio" v-model="picked1" value="B" id="B" />
    <label for="B">B</label>
  </div>

  <div>
    <!-- `toggle` 只会为 true 或 false -->
    <h3>复选框：布尔值</h3>
    <p>toggle: {{ toggle }}</p>
    <input type="checkbox" v-model="toggle" value="Tom" id="tom" />
    <label for="tom">Tom</label>
  </div>

  <div>
    <h3>选择器：字符串</h3>
    <p>select: {{ selected }}</p>
    <select v-model="selected">
      <option disabled value="">Please select</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>

  <div>
    <h3> 复选框： true-value 和 false value</h3>
    <p>重复: {{ toggleStr }}</p>
    <input type="checkbox" 
           true-value="yes" 
           false-value="no" 
           id="togglestr"
           v-model="toggleStr"/>
    <label for="togglestr">重复</label>
  </div>

  <div>
    <h3> 复选框： 动态 true-value 和 false value</h3>
    <p>重复: {{ toggleStr1 }}</p>
    <input type="checkbox" 
           :true-value="dynamicTrueValue" 
           :false-value="dynamicFalseValue" 
           id="togglestr"
           v-model="toggleStr1"/>
    <label for="togglestr">重复</label>
  </div>
</template>

<style scoped></style>