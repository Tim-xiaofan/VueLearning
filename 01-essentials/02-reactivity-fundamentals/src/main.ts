import { createApp } from 'vue';
import DeclaringReactiveState from './DeclaringReactiveState.vue';
import Reactive  from './Reactive.vue';
import Additional from './Additional.vue';

function main():void {
    createApp(DeclaringReactiveState).mount('#declaring_reactive_state');
    createApp(Reactive).mount('#reactive');
    createApp(Additional).mount('#additional');
}

main();