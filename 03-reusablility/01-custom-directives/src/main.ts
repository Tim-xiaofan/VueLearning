import { createApp } from 'vue';
import App from './App.vue';

function main(): void {
    const app = createApp(App);
    // 将一个自定义指令全局注册到应用层级
    app.directive('color', {
        mounted: (el: Element, bindling: object) => {
            el.style.color = bindling.value;
        }
    });

    // 一个很常见的情况是仅仅需要在 mounted 和 updated 上实现相同的行为，除此之外并不需要其他钩子。
    // 这种情况下我们可以直接用一个函数来定义指令
    app.directive('color-simple', (el: Element, bindling: object) => {
        el.style.color = bindling.value;
    });
    app.mount('#app');
}

main();