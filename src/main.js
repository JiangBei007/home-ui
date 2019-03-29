import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/rem.js"
import {SmallBeautifulToastPlugin} from 'root-directory'
Vue.config.productionTip = false
Vue.use(SmallBeautifulToastPlugin)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
