<template>
  <div class="row">
        <div class="col-md-12">
   <div class="card" style="width: 30rem;margin-left: 35%;">
          <div class="card-header">Inserisci i dati</div>
          <div class="card-body">
            <div v-if="loading" class="alert alert-dark" role="alert">
                  Loading...
            </div>
           <table v-if="!loading" class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Body</th>
                  <th scope="col">Title</th>
                  <th scope="col">User Id</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="p in posts">
                  <th scope="row">{{ p.id}}</th>
                  <td>{{ p.body}}</td>
                  <td>{{ p.title}}</td>
                  <td>@{{ p.userId}}</td>
                </tr>
              </tbody>
            </table>
            <a href="#" class="btn btn-primary"  @click="get()">GET</a>
          </div>
    </div>
  </div>
  </div>
</template>



<script>

import { mapGetters,mapMutations,mapActions } from 'vuex';
import axios from 'axios';

export default {
  name: 'ListPost',
  data (){
    return {
      posts : [],
      post : {
        userId : 1,
        title : '',
        body : '',
      },
      loading : true
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
    get(){
      
      console.log('GET');

      var url  = '/posts';
      var payload = this.post;
      this.loading = true;

      axios.get(url,payload)
        .then( res => {
          console.log(res.data);
          this.posts = res.data;
          this.loading = false;
        })
        .catch(err => {
          console.log(err)
          this.loading = false;
        });
    }
  },
  mounted(){
    console.log('mounted');
    this.get();
  }
}
</script>
