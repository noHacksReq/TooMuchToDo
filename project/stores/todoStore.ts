import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';

export const useTodoStore = defineStore('todos', () => {
    let todoArr: Array = ref([]);
    
    // check local storage and set todoArr with its value
    if(localStorage.getItem("tempSavedArr")) {
        todoArr.value = JSON.parse(localStorage.getItem("tempSavedArr"))
    };

       

    function clearList() {
        
        if(clearModal.value === true) {
            todoArr.value = localStorage.clear();
            todoArr.value = [];
            debugger
            clearModal.value = false;
        }
    }

    function goBack() {
        clearModal.value = false;

    }
    

    return { todoArr, testAction, goBack }
}
    
)