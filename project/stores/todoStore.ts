import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTodoStore = defineStore('todos', () => {
    
    //let todoObj: Object = ref({title: ''});
    
    const todoArr: Array = ref([]);
    return { todoArr }
})