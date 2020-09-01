<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layouts/Header";
import store from './store/index'


export default {
  name: "App",
  store,
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
</style>
