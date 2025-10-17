<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '/stores/todoStore.ts'


const store = useTodoStore();

const deleteItem = (i) => store.todoArr.splice(i, 1);



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
