import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './registerServiceWorker'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    cambioColore(colore){
      this.$emit('cambioColore',colore);
    }
  },
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
