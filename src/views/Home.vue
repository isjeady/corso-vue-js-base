<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
           <h1>HOME</h1>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters,mapMutations,mapActions,mapState } from 'vuex';


export default {
  name: 'home',
  data (){
    return {
      colore : 'Verde'
    }
  },
  computed : {
     ...mapState([
        'nome'
      ])
  },
  methods : {
     resetF(){
      this.colore= 'Bianco';
    }
  },
  components: {
  }
}
</script>



