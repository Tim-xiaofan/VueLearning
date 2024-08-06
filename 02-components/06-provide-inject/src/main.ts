import { createApp, readonly } from 'vue';
import App from './App.vue';

function main(): void {
    const app = createApp(App);
    // 应用层 Provide
    app.provide('appName', readonly('ProvideInject'));
    app.mount('#app');
}

main();