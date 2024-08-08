<script setup lang="ts">
import * as Vue from "vue";
import { defineAsyncComponent } from 'vue';
import { loadModule } from "vue3-sfc-loader";
import * as LoadingComponent from "./Loading.vue";
import * as ErrorComponent from "./Error.vue";

const options = {
    moduleCache: {
        vue: Vue,
    },
    async getFile(url: string) {
        const res = await fetch(url);
        const code = await res.text();
        console.log('code:', code);
        return code;
    },
    addStyle(textContent: string) {
        const style = Object.assign(document.createElement("style"), {
            textContent,
        });
        const ref = document.head.getElementsByTagName("style")[0] || null;
        document.head.insertBefore(style, ref);
    },
};

const myLoader =async () => {
    const res = await loadModule(
        "http://localhost:8080/AsyncComponent.vue",
        options
    );
    return res;
};

const AsyncComp = defineAsyncComponent(myLoader);

const AsyncComp1 = defineAsyncComponent({
  // 加载函数
  loader: myLoader,

  // 加载异步组件时使用的组件
  loadingComponent: LoadingComponent,
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 200,

  // 加载失败后展示的组件
  errorComponent: ErrorComponent,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 3000
});


const AsyncComp2 = defineAsyncComponent({
  // 加载函数
  loader: ()=>{ return import('./AsyncComponent.vue')},

  // 加载异步组件时使用的组件
  loadingComponent: LoadingComponent,
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 200,

  // 加载失败后展示的组件
  errorComponent: ErrorComponent,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 3000
});

</script>

<template>
    <h1>基本用法</h1>
    <AsyncComp />
    <h1>加载与错误状态</h1>
    <AsyncComp1 />
    <h1>ES 模块动态导入</h1>
    <AsyncComp2></AsyncComp2>
</template>

<style scoped></style>