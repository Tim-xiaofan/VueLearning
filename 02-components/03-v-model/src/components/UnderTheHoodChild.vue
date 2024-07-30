<script setup lang="ts">
defineProps({
    moduleValue: String
});
defineEmits(['update:moduleValue']);
</script>

<template>
    <input 
        :value="moduleValue" 
        @input="$emit('update:moduleValue', $event.target.value)"
    />
</template>

<style scoped></style>