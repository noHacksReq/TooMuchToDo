<script setup lang="ts">
import { ref } from 'vue'

import { useTodoStore } from '/stores/todoStore.ts'


const store = useTodoStore();
let todoItem: String = ref('');

function addToStore() {
    console.log(todoItem.value)
    store.todoObj.title = todoItem.value;
    store.todoArr.push(store.todoObj)
    todoItem.value = ''
}

</script>

<template>
  
  <form>
    <input v-model="todoItem" type="text">
    <input @click="addToStore" type="button" value="Add Todo">
  </form>
  <h1>{{ todoItem }}</h1>
</template>

<style scoped>
h1 {
    color: red;
}
</style>
