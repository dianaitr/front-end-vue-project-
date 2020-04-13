import Vue from 'vue'
import App from './App.vue'
import vuetify from './config/vuetify'
import VueRouter from 'vue-router';
import store from './config/store'
import Feed from './views/Feed'
import SearchUsers from './views/SearchUsers'
import Profile from './views/Profile' 
import Login from './views/Login'
import SignUp from './views/SignUp' 


const routes = [
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
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
