<template>
  <div class="todo-item" v-bind:class="{'is-complete' : todo.completed}">
    <p>
        <input 
            type="checkbox"
            :checked="todo.completed"
            v-on:change="$emit('change-status',todo.id)"
        >
        {{todo.title}}
        <button class="del" @click="$emit('del-item',todo.id)">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods:{

  }
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  margin: 5px;
  border-bottom: #cccccc 1px solid;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  float: right;
  width: 20px;
  height: 100%;
  border-radius: 50%;
  color: #f4f4f4;
  border: none;
  cursor: pointer;

}
</style>