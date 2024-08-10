// mouse.ts
import { ref, onMounted, onUnmounted} from 'vue';
import { useEventlistener } from './event';

type PositintRef = {
    x: Ref<numer>,
    y: Ref<number>
};

function useMouse(): PositintRef {
    // 被组合式函数封装和管理的状态
    const x = ref(0);
    const y = ref(0);

    function update(e: MouseEvent):void {
        x.value = e.pageX;
        y.value = e.pageY;
    }

    // onMounted(() => {
    //     window.addEventListener('mousemove', update);
    // });

    // onUnmounted(() => {
    //     window.removeEventListener('mousemove', update);
    // });

    // 嵌套多个组合式函数：一个组合式函数可以调用一个或多个其他的组合式函数
    useEventlistener(window, 'mousemove', update);

    return {x, y};
}

export {useMouse}