<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '/stores/todoStore.ts'


const store = useTodoStore();

const deleteItem = (i) => {
  // remove item from todoArr and re-set local storage
  store.todoArr.splice(i, 1);
  localStorage.setItem("tempSavedArr", JSON.stringify(store.todoArr));
} 



</script>

<template>
  <section>
    
    <ul class="tdList">
        <li
        class="tdItem" v-for="(item, index) in store.todoArr">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <button class="btn" @click="deleteItem(index)">Delete Item</button>
        </li>
    </ul>
    <div v-show="store.todoArr.length">
      <button class="btn" @click="store.testAction()">Clear list</button>
    </div>
  </section>
 
</template>

<style scoped>
* {
  outline: 1px solid red;
} 
.tdList {
  list-style: none;
  display: flex;
}

.tdItem {
  height: 42vh;
  width: 25vw;
  background-color: var(--light-purple);
  color: var(--dark-purple);
}

.btn {
  background-color: var(--teal);
  color: var(--dark-purple);
}
</style>
