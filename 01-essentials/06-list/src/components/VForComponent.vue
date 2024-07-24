<script setup lang="ts">
import { ref } from 'vue';
import TodoItem from './TodoItem.vue'

let todoId: number = 1;
const todoList = ref([
  { id: todoId++, title: 'Do the dishes' },
  { id: todoId++, title: 'Take out the trash' },
  { id: todoId++, title: 'Mow the lawn' }
]);

console.log('todoList: ', todoList.value);

const inputText = ref('');
function addNewTodo() {
  todoList.value.push({ id: todoId++, title: inputText.value });
  inputText.value = '';
}

</script>

<template>
  <h1>组件上使用 v-for</h1>
  <form @submit.prevent="addNewTodo">
    <input type="text" v-model="inputText" placeholder="New Todo Item" required/>
    <button type="submit">Add</button>
  </form>
  <ul>
    <TodoItem 
    v-for="(todo, index) in todoList" 
    :key="todo.id" 
    :title="todo.title"
    @remove="todoList.splice(index, 1)">
    </TodoItem>
  </ul>
</template>

<style scoped></style>