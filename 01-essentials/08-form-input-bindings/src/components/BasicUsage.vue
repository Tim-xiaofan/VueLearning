<script setup lang="ts">
import { ref } from 'vue';

const rawMessage = ref('');

function onInput(event): void {
  rawMessage.value = event.target.value;
}

const text = ref('');
const multilineText = ref('');

// 多值绑定到数组 
const checkedName = ref([]);
console.log('checkedName: ', checkedName);

const picked = ref('');

const selected = ref('');

const selectedMulti = ref('');

</script>

<template>
  <h1> 基本用法 </h1>
  <div>
    <!-- 优点：拼字阶段也会更新（使用 IME 的语言） -->
    <h3>原始方式</h3>
    <p>Message is: {{ rawMessage }}</p>
    <input @input="onInput" placeholder="Edit me" />
  </div>

  <div>
    <h3> 文本 </h3>
    <p> Message is: {{ text }}</p>
    <!-- 缺点：拼字阶段不会更新 -->
    <input v-model="text" placeholder="Edit me" />
  </div>

  <div>
    <h3>多行文本</h3>
    <!-- 连续的空白符会被合并。在遇到换行符或 <br> 元素时，或者根据填充行框盒子的需要换行 -->
    <p style="white-space: pre-line;">Message is: {{ multilineText }}</p>
    <textarea v-model="multilineText" placeholder="Add multiple linse" ></textarea>
  </div>

  <div>
    <h3>复选框</h3>
    <p> Checked name: {{ checkedName }}</p>
    <input type="checkbox" id="tom" value="Tom" v-model="checkedName"/>
    <label for="tom">Tom</label>
    <input type="checkbox" id="jerry" value="Jerry" v-model="checkedName"/>
    <label for="jerry">Jerry</label>
    <input type="checkbox" id="spike" value="Spike" v-model="checkedName"/>
    <label for="spike">Spike</label>
  </div>

  <div>
    <h3>单选按钮</h3>
    <p> Checked: {{ picked }}</p>
    <input type="radio" id="tom_radio" value="Tom" v-model="picked"/>
    <label for="tom_radio">Tom</label>
    <input type="radio" id="jerry_radio" value="Jerry" v-model="picked"/>
    <label for="jerry_radio">Jerry</label>
    <input type="radio" id="spike_radio" value="Spike" v-model="picked"/>
    <label for="spike_radio">Spike</label>
  </div>

  <div>
    <h3>Selected: {{ selected }}</h3>
    <select v-model="selected"> 
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

    <h3>Selected: {{ selectedMulti }}</h3>
    <select v-model="selectedMulti" multiple> 
      <option disabled value="">Please select</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

  </div>
</template>

<style scoped></style>