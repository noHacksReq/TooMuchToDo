<script setup lang="ts">
import {  } from 'vue'
//import InputComponent from './InputComponent.vue';
import { useTodoStore } from '/stores/todoStore.ts'
import InputComponent from './InputComponent.vue';
import ListComponent from './ListComponent.vue';


const store = useTodoStore();
console.log(store.test)

</script>

<template>
  <h1>This is the todo list</h1>
  <InputComponent />
  <ListComponent />
</template>

<style scoped>

</style>
