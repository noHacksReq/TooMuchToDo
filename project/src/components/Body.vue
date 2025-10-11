<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useTodoStore } from '/stores/todoStore.ts'


const store = useTodoStore();
console.log(store.test)

</script>

<template>
  <h1>This is the main body component{{ store.test }}</h1>
</template>

<style scoped>

</style>
