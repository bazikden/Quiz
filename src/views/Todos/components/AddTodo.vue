<template>
  <div class="form-container">
    <form @submit="addTodo">
      <input v-model="title" type="text" placeholder="Add todo" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
        title:""
    };
  },
  methods:{
      addTodo(e){
          e.preventDefault()
          const data = {
              id:Date.now(),
              title: this.title,
              completed:false
          }
          this.title = ''
          this.$emit('add-todo',data)
      }
  }

};
</script>

<style scoped>
.form-container {
  width: 100%;
  height: 30px;
  padding: 0 5px;
}

form {
  display: flex;
  height: 100%;
}
input {
  flex: 10;
  padding: 0 10px;
}
button {
  flex: 2;
}
</style>