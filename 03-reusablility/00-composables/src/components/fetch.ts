import { ref } from 'vue';

export function useFetch(url: string) {
    const data = ref<object | null>(null);
    const error = ref<string | null>(null);

    (async () => {
        data.value = null;
        error.value = null;

        try {
            const res = await fetch(url);
            data.value = await res.json();
        } catch (err: any) {
            error.value = err;
        }
    })();

    return { data, error };
} 