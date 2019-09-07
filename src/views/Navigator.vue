<template>
  <div id="nav">
    <router-link :to="{ path : '/'}">Home</router-link> |
    <router-link to="/post/new">New Post</router-link> | 
    <router-link to="/post/list">List Post</router-link>

  </div>
</template>

<script>

export default {
  name: 'navigator',
  data (){
    return {
    }
  },
  computed : {

  }
}
</script>



