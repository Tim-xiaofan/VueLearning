// mouse.js

import { onMounted, onUnmounted } from "vue";

export function useEventlistener(target: any,
    event: string, callback: (e: UIEvent) => void): void {
        
    onMounted(() => target.addEventListener(event, callback));
    onUnmounted(() => target.removeEventListener(event, callback));
}