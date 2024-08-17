import { createApp } from 'vue';
import App from './App.vue';
import i18nPlugin from './plugins/i18n';

function main(): void {
    const app = createApp(App);
    // 用于查找的翻译字典对象则应当在插件被安装时作为 app.use() 的额外参数被传入
    app.use(i18nPlugin, {
        greetings: {
            hello: 'Bonjour!'
        }
    });
    app.mount('#app');
}

main();