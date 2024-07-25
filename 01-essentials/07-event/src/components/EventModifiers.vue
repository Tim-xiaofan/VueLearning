<script setup lang="ts">
import { ref, onMounted } from 'vue';

function doThis(): void {
  alert('doThis');
}

function onSubmit(): void {
  alert('onSubmit');
}

function doThat(): void {
  alert('doThat');
}

const url = ref('https://www.baidu.com')

const scrollDivRef = ref(null);

onMounted(() => {
  let scrollContent:string = '<p> 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成</p>\
    <p>以防其中包含 `event.preventDefault()` --> </p>';
  for (let i = 0; i < 6; ++i) {
    scrollContent += scrollContent;
  }
  scrollDivRef.value.innerHTML = scrollContent;
});

function onScroll(e: any): void {
  console.log('Scrolling...');
}

</script>

<template>
  <h1>事件修饰符</h1>
  <h3>click.stop： 单击事件将停止传递,返回后继续跳转到链接 </h3>
  <a @click.stop="doThis" :href="url" target="_blank">单击事件将停止传递</a>

  <h3>submit.prevent： 提交事件将不再重新加载页面 </h3>
  <form @submit.prevent="onSubmit">
    <label>prompt: </label>
    <input type="text" required placeholder="Type here">
    <button type="submit">submit</button>
  </form>

  <h3> 修饰语可以使用链式书写: 不再跳转到链接 </h3>
  <a @click.stop.prevent="doThat" :href="url" target="_blank">修饰语可以使用链式书写</a>

  <h3> 也可以只有修饰符 </h3>
  <form @submit.prevent>
    <label>prompt: </label>
    <input type="text" required placeholder="Type here">
    <button type="submit">submit</button>
  </form>

  <!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
  <!-- 例如：事件处理器不来自子元素 -->
  <h3> 仅当 event.target 是元素本身时才会触发事件处理器</h3>
  <div @click.self="doThat" class="parent_div">
    Work
    <div class="sub_div">Not work</div>
    <div class="sub_div">Not work</div>
  </div>

  <h3>使用 `capture` 捕获模式</h3>
  <p>指向内部元素的事件，在被内部元素处理前，先被外部处理 </p>
  <div class="parent_div" @click.capture="doThis">
    First(doThis)
    <div class="sub_div" @click="doThat">Second(doThat)</div>
  </div>

  <h3>click.once: 点击事件至多触发一次(只会调用一次 doThis)</h3>
  <a @click.once="doThis" :href="url" target="_blank">Baidu</a>

  <h3>.passive</h3>
  <div @scroll.passive="onScroll" ref="scrollDivRef" class="scroll_div">
  </div>
</template>

<style scoped>
div.parent_div {
  border: groove green 3px;
  padding: 1em;
  background-color: #5454;
}

div.sub_div {
  margin: 8px;
  border: groove grey 3px;
  background-color: aqua;
}

div.scroll_div {
  margin: 8px;
  border: groove grey 3px;
  padding: 1em;
  height: 320px;
  overflow: scroll;
}
</style>