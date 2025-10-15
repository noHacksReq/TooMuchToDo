<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '/stores/todoStore.ts'


const store = useTodoStore();

function deleteItem(i) {
    
    store.todoArr.splice(i, 1);
    
}



</script>

<template>
  <section>
    <ul class="tdList">
        <li v-for="(item, index) in store.todoArr">{{ item.title }}
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
