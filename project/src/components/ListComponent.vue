<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '/stores/todoStore.ts'
import DeleteModal from './DeleteModal.vue';

const store = useTodoStore();
//const props = definePorps(['deleteMsg'])

const deleteItem = (i) => {
  
  //store.todoArr.splice(i, 1);
 store.todoArr = store.todoArr.filter((item) => item.delete === false)
  
  localStorage.setItem("tempSavedArr", JSON.stringify(store.todoArr));
  // remove item from todoArr and re-set local stora
    
 store.clearItem = false;
  
} 

</script>

<template>
  <section>
    
    <ul class="tdList">
        <li
        class="tdItem" v-for="(item, index) in store.todoArr">
            <h3 class="tdItemTitle">{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <button class="btn" @click="store.confirmDelete(index)">Delete Item</button>
            <div  v-if="store.clearItem" class="clearModal">
              <DeleteModal 
              deleteMsg="list item" 
              :deleteFunc= "() => deleteItem(index)"
              :goBackFunc="store.confirmItemGoBack"
              />
            </div>
            
        </li>
    </ul>
    <div v-show="store.todoArr.length">
      <button class="btn" @click="store.confirmClear()">Clear list</button>
    </div>
    <div  v-if="store.clearModal"  class="clearModal" .al>
      <DeleteModal 
      class="clearModal"
      deleteMsg="whole list" 
      :deleteFunc="store.clearList"
      :goBackFunc="store.goBack"
      />
    </div>
      
  </section>
 
</template>

<style scoped>


.clearModal {
  display: flex;
  height: 100vh;
  
 
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;  
}

.confirmBox {
  
  align-content: center;;
  margin: 40px auto;
  height: 80vh;
  width: 80vw;
  background-color: var(--light-purple);
  border-radius: 10px;
  border: 3px solid var(--teal);
  color: var(--dark-purple);
}

.modalCont {
  margin: 0 auto;
  width: 50%;
}

.modalBtn {
  background-color: var(--dark-purple);
  margin: 0 10px;
  padding: 50px 0;
  width: 250px;
  color: var(--teal);
  border: 0;
  border-style: solid;
  cursor: pointer;
}

.modalBtn:hover {
  background-color: var(--teal);
  color: var(--dark-purple);
  border: none;
}

.tdList {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}

.tdItem {
  height: 42vh;
  width: 25vw;
  margin: 20px;
  background-color: var(--light-purple);
  color: var(--dark-purple);
  border: 3px solid var(--teal);
  border-radius: 5px;
}

.tdItemTitle {
  background-color: var(--pink);
  padding: 3px;
  border: 2px solid var(--dark-purple);
  border-radius: 5px;
}

.btn {
  background-color: var(--teal);
  color: var(--dark-purple);
}
</style>
