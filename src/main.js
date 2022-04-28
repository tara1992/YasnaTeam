import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCompositionAPI from '@vue/composition-api'
import ToggleButton from 'vue-js-toggle-button'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCompositionAPI)
Vue.use(ToggleButton)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
