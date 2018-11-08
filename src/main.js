import Vue from 'vue'
import App from './App.vue'
import router from './router'
import routesMap from './views/routesMap'
import VueI18n from 'vue-i18n'
import VueI18nFilter from 'vue-i18n-filter'
import './assets/base.css'

Vue.config.productionTip = false
Vue.component('routes-map', routesMap)
Vue.use(VueI18n)
Vue.use(VueI18nFilter)

const i18n = new VueI18n({
  locale: 'zh-cn'
})

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
