import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';

export const useTodoStore = defineStore('todos', () => {
    let todoArr: Array = ref([]);
    let canConfirm: Boolean = ref(false);
    let clearModal: Boolean = ref(false);
    
    // check local storage and set todoArr with its value
    if(localStorage.getItem("tempSavedArr")) {
        todoArr.value = JSON.parse(localStorage.getItem("tempSavedArr"))
    };

    function confirmClear() {
       clearModal.value = true;
    }
       
    function clearList() {

            if(clearModal.value === true) {
                todoArr = localStorage.clear();
                canConfirm = true;
            }
                
           
            
        if (canConfirm === true) {
            
            todoArr = [];
        todoArr = localStorage.clear();
        canConfirm = !canConfirm;
        debugger
        }
        
        
    }
    

    return { todoArr, clearList, canConfirm, clearModal, confirmClear  }
}
    
)