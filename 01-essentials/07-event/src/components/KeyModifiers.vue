<script setup lang="ts">
import { onMounted, ref } from 'vue';
function submit(event: KeyboardEvent): void {
  alert(`submit: key=${event.key}`);
}

function pageDown(event: KeyboardEvent): void {
  alert(`pageDown: key = ${event.key}`);
}

const inputEnterRef = ref(null);
const inputPageDownRef = ref(null);

onMounted(() => {
  if (inputEnterRef.value != null) {
    inputEnterRef.value.addEventListener(
      'keyup',
      (event: KeyboardEvent) => {
        if (event.key == 'Enter') {
          alert('addEventListener: Enter');
        }
      });
  }

  if (inputPageDownRef.value != null) {
    inputPageDownRef.value.addEventListener(
      'keyup',
      (event: KeyboardEvent) => {
        if (event.key == 'PageDown') {
          alert('addEventListener: PageDown');
        }
      }
    );
  }
});

function clear(event: KeyboardEvent): void {
  if (event.target) {
    let input: EventTarget = event.target;
    console.log('clear input=', input);
    input.value = '';
  }
}

function doSomething(event: MouseEvent): void {
  alert('click + ctrl');
  console.log('MouseEvent: ', event);
}

</script>

<template>
  <h1>按键修饰符</h1>

  <h3>keyup.enter</h3>
  <!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
  <input @keyup.enter="submit" required placeholder="Type, then press enter" />

  <h3>使用 addEventListener 实现与 keyup.enter 相同的功能 </h3>
  <input ref="inputEnterRef" required placeholder="Type, then press enter" />

  <h3>keyup.page-dwon</h3>
  <input @keyup.page-down="pageDown" placeholder="Type, teh press page-dwon" />

  <h3>使用 addEventListener 实现与 keyup.page-dwon 相同的功能 </h3>
  <input ref="inputPageDownRef" required placeholder="Type, then press enter" />

  <h3>系统按键修饰符</h3>
  <input @keyup.alt.enter="clear" required placeholder="Type, then press Alt + Enter" />
  <div @click.ctrl="doSomething"> ctrl + click</div>
</template>

<style scoped></style>