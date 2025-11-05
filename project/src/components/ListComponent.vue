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
      <button class="btn" @click="store.confirmClear()">Clear list</button>
    </div>
    <div v-show="store.clearModal" class="confirmModal">
      <button
      @click="store.clearList()"
      class="confirm">This will delete all items</button>
    </div>
    
  </section>
 
</template>

<style scoped>

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

.confirm {
  z-index: 20;
  opacity: 1;
}

.btn {
  background-color: var(--teal);
  color: var(--dark-purple);
}

.confirmModal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  background-color: red;
  opacity: 0.5;
  
  z-index: 10;
}
</style>
