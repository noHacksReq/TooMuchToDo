<script setup lang="ts">
import { ref } from 'vue'

import { useTodoStore } from '/stores/todoStore.ts'


const store = useTodoStore();
let todoId = ref(0)
let todoItem = ref('');
let todoObj = ref({});

function addToStore() {
    todoObj = new Object;
    todoObj.itemId = todoId.value;
    ++todoId.value;
    todoObj.title = todoItem.value;
    store.todoArr.push(todoObj);
    
    todoItem.value = ''
}

</script>

<template>
  
  <form>
    <input v-model="todoItem" type="text">
    <input @click="addToStore" type="button" value="Add Todo">
  </form>
  
</template>

<style scoped>
h1 {
    color: red;
}
</style>
