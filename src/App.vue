<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
   
    <h2>App colore verso A : <u>{{ coloreInApp }}</u></h2>
    <button @click="coloreInApp = 'Arancione'">Cambia Colore</button>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <componente-a :colore="coloreInApp"></componente-a>
      </div>
      <div class="col-md-6">
        <componente-b></componente-b>
      </div>
    </div>
 
   
   <!--  <router-view/> -->
  </div>
</template>

<script>
import ComponenteA from '@/components/ComponenteA.vue'
import ComponenteB from '@/components/ComponenteB.vue'

export default {
  name : 'app',
  components : {
    ComponenteA,
    ComponenteB
  },
  data(){
    return {
      coloreInApp : 'Verde'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
