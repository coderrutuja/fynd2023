import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

Vue.config.productionTip = false;

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000', // your API endpoint
  headers: {
    'Content-Type': 'application/json',
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');


/* import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
*/
