<template>
  <div id="app">
    <navigator></navigator>
    <router-view/>
  </div>
</template>


<script>
import Navigator from '@/views/Navigator.vue'
export default {
  name : 'app',
  components : {
    Navigator
  }
}
</script>

<style lang="scss">
#app {

  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
