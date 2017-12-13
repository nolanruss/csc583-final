import Vue from 'vue'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'
import VueRouter from 'vue-router'
import {ServerTable, ClientTable, Event} from 'vue-tables-2'
import store from './store'

// Register Vue add-ons
Vue.use(VeeValidate)
Vue.use(VueRouter)
Vue.use(ClientTable, {
  compileTemplates: true,
  filterByColumn: true,
  texts: {
    filter: "Search:"
  }
})

import App from './components/App.vue'
import Signin from './components/Signin.vue'
import Admin from './components/Admin.vue'
import { Validator } from 'vee-validate';
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Signin },
    { path: '/admin', component: Admin }
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
    
})
