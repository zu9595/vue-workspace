<template>
  <nav>
    <h1>{{ getToday }}</h1> <!--프로퍼티 호출-->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/board">게시판</router-link> |
    <router-link to="/todo">Todo</router-link> |
    <router-link to="/store">Store</router-link>
  </nav>
  <router-view />
</template>

<script>
import mix from '../src/mixins.js'
export default {
  mixins: [mix],
  data() {
    return {
      rootData: 'hello'
    }
  },
  provide() {
    return {
      rootList: 'Hello,Hello,Hello',
      rootStr: 'World'
    }
  },
  computed: {
    getToday() {
      return this.$getToday('yyyy/MM/dd');
    }
  },
  mounted() {
    console.log("App.vue mounted");
  }
}
</script>

<style>
@import url("../src/assets/style.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
