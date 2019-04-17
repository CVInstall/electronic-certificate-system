import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login.vue'
import upload from '../views/upload.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/upload',
      name: 'upload',
      component: upload
    }
  ]
})
