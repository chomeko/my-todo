import Vue from 'vue'
import App from './App.vue'
//import router from './router'
import store from './store'

import "./styles/reset.css"
import "./styles/main.css"


Vue.config.productionTip = false

new Vue({
  store,
  components: { App },
  //router,
  render: h => h(App),
}).$mount('#app')
