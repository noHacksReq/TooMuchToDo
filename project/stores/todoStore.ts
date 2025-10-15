import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTodoStore = defineStore('todos', () => {
    const todoArr: Array = ref([]);
    return { todoArr }
})