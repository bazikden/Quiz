<template>
  <header>
    <p class="logo">Logo</p>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/quiz">Quiz</router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 50px;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px;
}
.logo {
  font-size: 20px;
}
#nav {
  width: 50%;
  padding: 0 30px;
  margin: 0 auto;
  text-align: center;

  a {
    font-weight: bold;
    color: white;
    padding: 0 10px;

    &.router-link-exact-active {
      color: #2113e2;
    }
  }
}
</style>