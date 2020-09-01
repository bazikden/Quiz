<template>
  <div id="home">
    <Todos
      v-bind:todos="allTodos"
      v-on:change-status="changeStatus"
      v-on:del-item="delItem"
      v-on:add-todo="addTodo"
    />
  </div>
</template>

<script>
import Todos from "./components/Todos";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Todos,
  },
  // computed:{
  //   allTodos(){
  //     return this.$store.getters.allTodos
  //   }
  // },
  computed: mapGetters(["allTodos"]),
  methods: {
    changeStatus(id) {
      this.$store.dispatch("CHANGE_STATUS", id);
    },
    delItem(id) {
      this.$store.dispatch("DEL_TODO", id);
    },
    async addTodo(data) {
      this.$store.dispatch('ADD_TODO',data)
    },
  },
  async created() {
    this.$store.dispatch("FETCH_TODOS");
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

