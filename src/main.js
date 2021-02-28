import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue} from 'bootstrap-vue/dist/bootstrap-vue.esm'
import Vuelidate from 'vuelidate'
import sharedMix from '../src/mixins/shareMix'


Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(Vuelidate)

new Vue({
  router,
  mixins: [sharedMix],
  render: h => h(App)
}).$mount('#app')
