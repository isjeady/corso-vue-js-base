<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <profile-new-component></profile-new-component>
        </div>
        <div class="col-md-6">
           <h1>HOME</h1>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DetailProfile from '@/components/profile/DetailProfile.vue'
import NewProfile from '@/components/profile/NewProfile.vue'

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
    'profile-detail-component' : DetailProfile,
    'profile-new-component' : NewProfile
  }
}
</script>



