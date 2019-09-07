import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'

//Profile
import RootProfile from '../components/profile/RootProfile.vue'
import NewProfile from '../components/profile/NewProfile.vue'
import DetailProfile from '../components/profile/DetailProfile.vue'
import ListProfile from '../components/profile/ListProfile.vue'
import NewPost from '../components/NewPost.vue'
import ListPost from '../components/ListPost.vue'

/*
const RootProfile = () => import( '../components/profile/ListProfile.vue');
const NewProfile = () => import( '../components/profile/NewProfile.vue');
const DetailProfile = () => import( '../components/profile/DetailProfile.vue');
const ListProfile = () => import( '../components/profile/ListProfile.vue');
*/


import NotFoundComponent from '../components/NotFoundComponent.vue'

Vue.use(Router);

/*
const protect = (to, from, next) => {
  //if (store.getters.isAuthenticated) {
  if(false){
    next();
    return;
  }
  next({ name : 'home'});
};
*/

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
    },
    {
      path: '/post/new',
      component: NewPost,
      name: 'newpost',
    },
    {
      path: '/post/list',
      component: ListPost,
      name: 'listpost',
    },
    {
      path: '/404',
      component: NotFoundComponent,
      name: 'notFound'
    },
    { path: '*', redirect: { name: 'notFound' } }
  ]
})

/*
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( './views/About.vue')
    }
  ]
})
*/
