<script setup lang="ts">
// 在模板中启用 v-focus
const vFocus = {
  mounted: (el:Element) => el.focus(),
};
// 在 <script setup> 中，任何以 v 开头的驼峰式命名的变量都可以被用作一个自定义指令

const vDemo = (el: Element, binding: object) => {
    console.log('vDemo: ',  binding.value.color) // => "white"
    console.log('vDemo: ', binding.value.text) // => "hello!"
};
</script>

<template>
    <h1>介绍</h1>
    <input v-focus placeholder="This should be focused"/>
    
    <h1>应用级自定义指令</h1>
    <p v-color="'red'">红色</p>

    <h1>简化形式</h1>
    <p>  一个很常见的情况是仅仅需要在 mounted 和 updated 上实现相同的行为，除此之外并不需要其他钩子。
      这种情况下我们可以直接用一个函数来定义指令</p>
    <p v-color-simple="'green'">绿色</p>

    <h1>对象字面量</h1>
    <p> 指令需要多个值，你可以向它传递一个 JavaScript 对象字面量。指令也可以接收任何合法的 JavaScript 表达式</p>
    <div v-demo="{color: 'white', text: 'hello!'}"> </div>
</template>

<style scoped></style>