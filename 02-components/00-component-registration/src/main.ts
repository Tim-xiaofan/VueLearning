import { createApp } from 'vue';
import App from './App.vue';
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';

function main(): void {
    const app = createApp(App);
    // 全局注册
    app
        .component('ComponentA', ComponentA)
        .component('ComponentB', ComponentB);
    app.mount('#app');
}

main();