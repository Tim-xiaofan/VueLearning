<script lang="ts" setup></script>

<template>
    <div class="card">
        <div v-if="$slots.header" class="card-header">
            <slot name="header">Header</slot>
        </div>

        <div v-if="$slots.default" class="card-main">
            <slot> Main </slot>
        </div>
        
        <div v-if="$slots.footer" class="card-footer">
            <slot name="footer"> Footer</slot>
        </div>
    </div>
</template>

<style scoped>
.card {
    position: relative;
    border: groove #98bf21 2px;
    padding: 0;
}

.card-header {
    background-color: #cccc;
}

.card-main {
    margin: 0;
    background-color: white;
}

.card-footer {
    border-top: 1px solid #ccc;
    margin: 0;
}
</style>