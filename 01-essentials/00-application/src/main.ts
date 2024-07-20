import { createApp } from 'vue';
// 从一个单文件组件中导入根组件
import App from './App.vue';
import App1 from './App1.vue';

function main(): void {
    // 创建一个新的 应用实例
    const app = createApp(App);

    // 配置
    app.config.errorHandler = (err) => {
        /* 处理错误 */
        console.log('err: ', err);
    };

    // 挂载应用：该方法接收一个“容器”参数，
    // 可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串
    app.mount('#app');

    //应用根组件的内容将会被渲染在容器元素里面。容器元素自己将不会被视为应用的一部分

    // 多个应用实列
    const app1 = createApp(App1);
    app1.mount('#app1');
}

main();