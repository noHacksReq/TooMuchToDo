import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTodoStore = defineStore('todos', () => {
    const test: String = ref('testing store');
    let todoObj: Object = ref({title: ''});
    
    const todoArr: Array = ref([]);
    return {todoObj, todoArr }
})