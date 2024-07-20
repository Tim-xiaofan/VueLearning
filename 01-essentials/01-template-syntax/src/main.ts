import { createApp } from 'vue';
import App from './App.vue';
import JavaScriptExp from './JavaScriptExp.vue';
import Directives from './Directives.vue';

function main():void {
    const app = createApp(App);
    app.mount('#app');

    createApp(JavaScriptExp).mount('#JavaScriptExp');
    createApp(Directives).mount('#Directives');
}

main();