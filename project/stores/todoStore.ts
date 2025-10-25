import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';

export const useTodoStore = defineStore('todos', () => {
    const todoArr: Array = ref([]);
    
    // check local storage and set todoArr with its value
    if(localStorage.getItem("tempSavedArr")) {
        todoArr.value = JSON.parse(localStorage.getItem("tempSavedArr"))
        
    }
    
    return { todoArr, savedArr }
}
)