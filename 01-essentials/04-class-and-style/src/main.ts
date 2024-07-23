import { createApp } from 'vue';
import App from './App.vue';

function main():void {
    const app = createApp(App);
    app.config.errorHandler = (err) => {
        console.log('App error: ', err);
    };
    app.mount('#app');
}

main();