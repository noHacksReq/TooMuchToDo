<script setup lang="ts">
import { ref } from 'vue'

import { useTodoStore } from '/stores/todoStore.ts'


const store = useTodoStore();
let todoId = ref(0)
let todoItem = ref('');
let todoDesc = ref('');
let todoObj = ref({});

function addToStore() {
    todoObj = new Object;
    todoObj.itemId = todoId.value;
    ++todoId.value;
    todoObj.title = todoItem.value;
    todoObj.description = todoDesc.value;
    store.todoArr.push(todoObj);
    todoDesc.value = '';
    todoItem.value = '';
}

</script>

<template>
  
  <form class="todoForm">
    <input class="textInput" v-model="todoItem" type="text" placeholder="add item">
    <textarea class="textBox" v-model="todoDesc" type="textarea" placeholder="add details"></textarea>
    <span class="material-symbols-outlined addIcon" @click="addToStore"
    title="add todo item">
add
</span>
  </form>
  
</template>

<style scoped>
h1 {
    color: red;
}

.todoForm {
  display: flex;
  flex-direction: column;
}

.textInput {
  margin: 5px 0;
  border-radius: 5px;
}

.textBox {
  height: 200px;
   margin: 5px 0;
   border-radius: 5px;
}

.addIcon {
  width: fit-content;
  align-self: flex-end;
  border-radius: 5px;
  cursor: pointer;
}
</style>
