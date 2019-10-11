// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import globalComponents from './common/js/components'
import VueLazyload from 'vue-lazyload'
import axios from './common/js/axios'
import store from './store'

import './common/styles/reset.styl'

Vue.use(axios)
Vue.use(globalComponents)
Vue.use(VueLazyload, {
  loading: require('./common/images/loading.png')
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
