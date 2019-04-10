import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: 'Login',
        name: 'login',
        component: resolve => require(['../components/asyncComponents/Login.vue'], resolve)
      }]
    }
  ]
})
