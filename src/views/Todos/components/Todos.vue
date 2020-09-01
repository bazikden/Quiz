<template>
  <div class="container">
    <h1>Todos</h1>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem 
        :todo="todo" 
        v-on:change-status="$emit('change-status',todo.id)" 
        v-on:del-item="$emit('del-item',todo.id)"
      />
    </div>
    <AddTodo
        v-on:add-todo="addTodo"
    />
  </div>
</template>    

<script>
import TodoItem from "./TodoItem"
import AddTodo from './AddTodo'

export default {
  name: "Todos",
  components:{
      TodoItem, 
      AddTodo
  },
  props: ["todos"],
  methods:{
      addTodo(data){
          this.$emit('add-todo',data)
      }
  }
};
</script>

<style  >
.container {
  width: 1000px;
  margin: 0 auto;
}

h1 {
  text-align: center;
}
</style>