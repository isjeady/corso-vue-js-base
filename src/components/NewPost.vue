<template>
  <div class="row">
        <div class="col-md-12">
   <div class="card" style="width: 22rem;margin-left: 35%;">
          <div class="card-header">Inserisci i dati</div>
          <div class="card-body">
            <div class="list-group">
              <div v-if="success" class="alert alert-success" role="alert">
                Inserito con successo!!!
              </div>
              <div v-if="loading" class="alert alert-dark" role="alert">
                Loading...
              </div>
              <label>Title: </label>
              <input type="text" v-model="post.title" name="title" />
              <label>Testo: </label>
              <textarea name="body" id="" cols="30" rows="10" v-model="post.body"></textarea>
            </div>
            <hr>
            <a href="#" class="btn btn-primary"  @click="invia()">Salva</a>
          </div>
    </div>
  </div>
  </div>
</template>



<script>

import { mapGetters,mapMutations,mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'NewPost',
  data (){
    return {
      post : {
        userId : 1,
        title : '',
        body : '',
      },
      loading : false,
      success : false
    }
  },
  computed : {

  },
  methods : {
    ...mapMutations([
      'setName'
    ]),
    ...mapActions('profile',[
       'actionProfile'
    ]),
    invia(){
      var url  = '/posts';
      var payload = this.post;
      this.loading = true;

      axios.post(url,payload)
        .then( res => {
          console.log(res);
          this.loading = false;
          this.success = true;
        })
        .catch(err => {
          console.log(err)
          this.loading = false;
        });
    }
  },
}
</script>
