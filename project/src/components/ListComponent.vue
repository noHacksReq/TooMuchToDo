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
        <li v-for="(item, index) in store.todoArr">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <button @click="deleteItem(index)">Delete Item</button>
        </li>
    </ul>
  </section>
 
</template>

<style scoped>
.tdList {
    list-style: none;
}
</style>
