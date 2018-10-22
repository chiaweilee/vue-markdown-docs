import Vue from 'vue'
import App from './App.vue'
import router from './router'
import routesMap from './views/routesMap'
import './base.css'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.component('routes-map', routesMap)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
