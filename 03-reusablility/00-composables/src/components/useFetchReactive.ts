import { ref, watchEffect, toValue } from 'vue';

// 能接收静态 URL 字符串、ref 和 getter
export function useFetchReactive(url: string | Ref<string>) {
    const data = ref<object | null>(null);
    const error = ref<string | null>(null);

    watchEffect(async () => {
        data.value = null;
        error.value = null;

        // resolve the url value synchronously so it's tracked as a
        // dependency by watchEffect()
        const urlValue = toValue(url)

        try {
            const res = await fetch(urlValue);
            data.value = await res.json();
        } catch (err: any) {
            error.value = err;
        }
    });

    return { data, error };
} 