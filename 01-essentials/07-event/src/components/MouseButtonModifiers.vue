<script setup lang="ts">

function onClick(event: MouseEvent): void {
  alert(`onClick: pointerType=${event.pointerType}, type=${event.type}`);
  console.log(event);
}

function onCtrlClick(event: MouseEvent): void {
  alert(`onClick: pointerType=${event.pointerType}, type=${event.type}`);
}

</script>

<template>
  <h1>鼠标按键修饰符</h1>
  <!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
  <button @click.ctrl="onClick">Ctrl click</button>

  <!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
  <button @click.ctrl.exact="onCtrlClick">Ctrl click exact</button>

  <!-- 仅当没有按下任何系统按键时触发 -->
  <button @click.exact="onClick">Click exact</button>

  <button @click.right="onClick">Right click</button>

  <button @click.right.prevent="onClick">Right click prevent</button>

  <button @click.middle="onClick">Middle click</button>
</template>

<style scoped>
button {
  display: block;
}
</style>