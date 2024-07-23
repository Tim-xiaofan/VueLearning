<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
const activeColor = ref('red');
const fontSize = ref(30);
const styleObject = reactive({
  color: 'red',
  fontSize: '30px'
});
const styleObject1 = reactive({
  color: 'yellow',
  backgroundColor: 'black',
});

const tm = ref(0);
const greetings = ['早上好', '下午好', '下午好', '晚上好']
const greeting = computed(() => {
  return greetings[tm.value];
});

const colors = ['#ADD8E6', '#87CEEB', '#D8BFD8', '#C0C0C0'];
const tmColorStyle = computed(() => ({
  backgroundColor: colors[tm.value]
}))
const sz =  ref(colors.length);
</script>

<template>
  <h1>绑定内联样式</h1>

  <h3>绑定对象</h3>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"> camelCase </div>
  <div :style="{ color: activeColor, 'font-size': fontSize + 'px' }"> kebab-cased </div>
  <div :style="styleObject"> {{ styleObject }} </div>

  <h3>绑定数组</h3>
  <div :style="[styleObject, styleObject1]">{{ [styleObject, styleObject1] }}: 后面的样式会覆盖前面的</div>

  <h3>样式多值</h3>
  <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">对一个样式属性提供多个 (不同前缀的) 值, 数组仅会渲染浏览器支持的最后一个值</div>

  <h3>计算属性</h3>
  <button @click="tm = (tm + 1) % sz">休息一会</button>
  <p :style="tmColorStyle">Hi, {{ greeting }}</p>
</template>

<style scoped></style>