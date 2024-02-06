<template>
  <div id="myDIV" class="header">
    <h2 style="margin:5px">My To Do List</h2>
    <input type="text" id="myInput" placeholder="Title..." v-model="todo">
    <span v-on:click="newData" class="addBtn">Add</span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      todo: ''
    }
  },
  methods:{
    newData(){
      if(this.todo != null && this.todo != ''){
        this.$emit('add-data', this.todo);
        this.todo = '';
      }
    }
  }
}
</script>
