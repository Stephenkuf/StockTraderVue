import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);

import {  store } from "./store/store";

new Vue({
  el: '#app',
  store,
  render: h => h(App)
 })
