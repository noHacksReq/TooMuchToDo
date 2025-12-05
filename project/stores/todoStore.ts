import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';

export const useTodoStore = defineStore('todos', () => {
    let todoArr: Array = ref([]);
    let clearModal = ref(false);
    let clearItem = ref(false);
    // check local storage and set todoArr with its value
    if(localStorage.getItem("tempSavedArr")) {
        todoArr.value = JSON.parse(localStorage.getItem("tempSavedArr"))
    };

    function confirmDelete(i) {
        
        
        clearItem.value = true;
        todoArr.value[i].delete = true;
    }

    function confirmItemGoBack() {
        clearItem.value = false;
    }

    function confirmClear() {
        
        clearModal.value = true;
    }
       

    function clearList() {
        console.log('props are working')
        if(clearModal.value === true) {
            todoArr.value = localStorage.clear();
            todoArr.value = [];
            
            clearModal.value = false;
        }
    }

    function goBack() {
        clearModal.value = false;

    }
    

    return { todoArr, confirmClear, clearList, 
        goBack, clearModal, confirmDelete, 
        clearItem, confirmItemGoBack }

}
    
)