<template>
    <div class="container">
        <header>
            <!-- 标题内容放这里 -->
            <slot name="header">标题</slot>
        </header>
        <main>
            <!-- 主要内容放这里 -->
            <slot>主内容</slot>
        </main>
        <footer>
            <!-- 底部内容放这里 -->
            <slot name="footer">底部内容</slot>
        </footer>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    border: groove #98bf21 2px;
    padding: 0;
}

header {
    background-color: #cccc;
}

main {
    margin: 0;
    background-color: white;
}

footer {
    border-top: 1px solid #ccc;
    margin: 0;
}
</style>