<script setup lang="ts">
import {  } from 'vue'
//import InputComponent from './InputComponent.vue';
import { useTodoStore } from '/stores/todoStore.ts'
import InputComponent from './InputComponent.vue';
import ListComponent from './ListComponent.vue';


const store = useTodoStore();


</script>

<template>
  <h1 class="title">This is the todo list</h1>
  <InputComponent />
  <ListComponent />
</template>

<style scoped>

.title {
  color: var(--teal);
}

</style>
