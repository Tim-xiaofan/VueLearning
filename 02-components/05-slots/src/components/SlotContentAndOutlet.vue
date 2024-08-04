<script setup lang="ts">
import FancyButton from './FancyButton.vue';
import AwesomeIcon from './AwesomeIcon.vue';
import { ref } from 'vue';

function onClick(event: MouseEvent): void {
    alert(`${event.target.className}`);
}

const text = ref('Text in parent');
</script>

<template>
    <h1>插槽内容与出口</h1>
    <FancyButton @click="onClick">
        Click me! <!-- 插槽内容 --> 
    </FancyButton>

    <h3>插槽内容可以是任意合法的模板内容，不局限于文本。例如我们可以传入多个元素，甚至是组件 </h3>
    <FancyButton @click="onClick">
        <span style="color: red;"> Click me!</span>
        <AwesomeIcon name="plus"/>
    </FancyButton>

    <h1>渲染作用域</h1>
    <p>父组件模板中的表达式只能访问父组件的作用域；子组件模板中的表达式只能访问子组件的作用域。</p>
    <span>{{ text }}</span> <br>
    <FancyButton @click="onClick"> {{ text }}</FancyButton>
</template>

<style scoped></style>