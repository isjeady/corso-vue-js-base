<template>
  <div>
   <div class="card" style="width: 18rem;">
        <h1>List Profile</h1>

        <div v-for="user in users" :key="user.id">
           <router-link :to="{ name : 'detailProfile' , params : { id : user.id },
           query : { admin : true , qu : 4000 } }">
              {{ user.name}}
           </router-link>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ListProfile',
   data (){
    return {
      users : [
        { id : 1, name : 'Fabio'},
        { id : 2, name : 'Leandro'},
        { id : 3, name : 'Marco'}
      ],
      confirmed : false,
    }
  },
  /*
  beforeRouteLeave(to,from,next){
    console.log('beforeRouteLeave');
    if(this.confirmed){
      next();
    }else{
      if(confirm('Sicuro di andare avanti')){
        next();
      }
      next(false);
    }
  },
  beforeRouteEnter(to,from,next){
    console.log('beforeRouteEnter');
    if(true){
      next();
    }else{
      next(false);
    }
  }
  */
  
}
</script>
