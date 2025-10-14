<script setup lang="ts">
import {  } from 'vue'
//import InputComponent from './InputComponent.vue';
import { useTodoStore } from '/stores/todoStore.ts'
import InputComponent from './InputComponent.vue';


const store = useTodoStore();
console.log(store.test)

</script>

<template>
  <InputComponent />
  <h1>This is the main body component{{ store.test }}</h1>
</template>

<style scoped>

</style>
