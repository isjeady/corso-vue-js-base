<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          Benvenuto : {{ nome }}
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-6">
          <profile-component></profile-component>
        </div>
        <div class="col-md-6">
            <profile-detail-component></profile-detail-component>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileDetailComponent from '@/components/ProfileDetailComponent.vue'
import ProfileComponent from '@/components/ProfileComponent.vue'

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
    'profile-detail-component' : ProfileDetailComponent,
    'profile-component' : ProfileComponent
  }
}
</script>



