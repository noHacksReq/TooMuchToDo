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
            <h3 class="tdItemTitle">{{ item.title }}</h3>
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
  
} 
.tdList {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.tdItem {
  height: 42vh;
  width: 25vw;
  margin: 20px;
  background-color: var(--light-purple);
  color: var(--dark-purple);
  border: 3px solid var(--teal);
  border-radius: 5px;
}

.tdItemTitle {
  background-color: var(--pink);
  padding: 3px;
  border: 2px solid var(--dark-purple);
  border-radius: 5px;
}

.btn {
  background-color: var(--teal);
  color: var(--dark-purple);
}
</style>
