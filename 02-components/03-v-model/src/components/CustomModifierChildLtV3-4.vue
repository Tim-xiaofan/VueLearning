<script setup lang="ts">
const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    modelModifiers: { default: () => ({}) /* 返回动态属性 object*/}
});

const emit = defineEmits(['update:modelValue']);

function onInput(value: string): void {
    if (props.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
    }
    emit('update:modelValue', value)
}
</script>

<template>
    <input :value="modelValue" @input="onInput($event.target.value)" />
</template>

<style scoped></style>