<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

const isActive = ref(false);
const hasError = ref(false);

const classObject = reactive({
  active: true,
  text_danger: false
});

const classObject1 = computed(() => ({
  active: isActive.value,
  'text_danger': hasError.value
}));

const activeClass = ref('active');
const errorClass = ref('text_danger');

</script>

<template>
  <h1>绑定 HTML class</h1>

  <h3>绑定对象</h3>
  <div :class="{ active: isActive }">Status: {{ isActive ? 'Active' : 'Inactive' }}</div>
  <button @click="isActive = !isActive"> {{ isActive ? 'DeactivateIt' : 'ActivateIt' }}</button>

  <h3>多个字段</h3>
  <div class="static" :class="{ active: isActive, text_danger: hasError }">
    <p>Status: {{ isActive ? 'Active' : 'Inactive' }}</p>
    <p v-if="hasError" :class="{ error: hasError }"> Text Error</p>
  </div>
  <button @click="hasError = !hasError"> {{ hasError ? 'MakeItOk' : 'MakeItError' }} </button>

  <h3>绑定对象</h3>
  <div class="static" :class="classObject">
    <p>绑定的对象并不一定需要写成内联字面量的形式，也可以直接绑定一个对象</p>
    <p>Status: {{ classObject.active ? 'Active' : 'Inactive' }}</p>
    <p v-if="classObject.text_danger" :class="{ error: classObject.text_danger }"> Text Error</p>
  </div>
  <button @click="classObject.text_danger = !classObject.text_danger"> {{ classObject.text_danger ? 'MakeItOk' :
    'MakeItError' }} </button>

  <h3>绑定计算属性</h3>
  <div class="static" :class="classObject1">
    <p>Status: {{ isActive ? 'Active' : 'Inactive' }}</p>
    <p v-if="hasError" :class="{ error: hasError }"> Text Error</p>
  </div>
  <button @click="hasError = !hasError"> {{ hasError ? 'MakeItOk' : 'MakeItError' }} </button>

  <h3>绑定数组</h3>
  <div :class="[activeClass, errorClass]">
    <p>Status: {{ isActive ? 'Active' : 'Inactive' }}</p>
    <p v-if="hasError" :class="{ error: hasError }"> Text Error</p>
  </div>
  <button @click="hasError = !hasError"> {{ hasError ? 'MakeItOk' : 'MakeItError' }} </button>

  <h3>在组件上使用</h3>
  <!-- MyComponent 模板使用 $attrs 时 -->
  <div :class="$attrs.class">
    Hi!<br>
    <span>This is a child component</span>
    <p>如果你的组件有多个根元素，你将需要指定哪个根元素来接收这个 class</p>
    <p>$attrs.class: {{ $attrs.class }}</p>
  </div>
</template>

<style scoped>
div {
  border: groove #98bf21 3px;
  border-radius: 5px;
  background-color: #bbbb;
  padding: 1em;
}

.active {
  background-color: #98bf21;
}

p.error {
  color: red;
}

.sub_comp {
  border: solid black 3px;
  background-color: yellow;
  padding: 2%;
}
</style>