import Vue from 'vue'
import App from 'App'

import router from 'router'


import store from 'store/store'


// export const bus = new Vue()

// import font-awesome library
import 'font-awesome/css/font-awesome.css'


// import animate.css library
import 'vue2-animate/dist/vue2-animate.min.css'


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount(`#app`);
