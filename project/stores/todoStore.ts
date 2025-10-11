import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTodoStore = defineStore('todos', () => {
    const test = ref('testing store')

    return { test }
})