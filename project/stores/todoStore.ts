import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTodoStore = defineStore('todos', () => {
    const todoArr: Array = ref([]);
    //need to add data from savedArr in local storage to this savedArr
    const savedArr: Array = ref([]);
    
    return { todoArr, savedArr }
})