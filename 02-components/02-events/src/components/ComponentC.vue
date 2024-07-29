<script setup lang="ts">
const emit = defineEmits({
    click: null, //无校验
    submit: (e: MouseEvent, email: string, passward: string) => {
        if (email && passward) {
            return true;
        } else {
            alert('Invalid email or passward');
            return false;
        }
    }
});

function submitForm(event, email: string, password: string) {
    console.log(`email: ${email}, passward: ${password}`);
    emit('submit', event,  email, password);
}
</script>

<template>
    <button @click="submitForm($event, 'xxx@example.com', '12345')">Submit</button>
</template>

<style scoped></style>