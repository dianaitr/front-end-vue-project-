import Vue from 'vue'
import App from './App.vue'
import vuetify from './config/vuetify'
import VueRouter from 'vue-router';
import store from './config/store'
import Feed from './views/Feed'
 import SearchUsers from './views/SearchUsers'
import Profile from './views/Profile' 


const routes = [
  { path: "/feed", component: Feed },
  { path: "/users", component: SearchUsers },
  { path: "/profile", component: Profile }
]

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(vuetify)

const router = new VueRouter({ routes });

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
