import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Participators from '@/components/Participator/Participators'
import Schedules from '@/components/Schedule/Schedules'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/participators',
      name: 'Participators',
      component: Participators
    },
    {
      path: '/schedules',
      name: 'Schedules',
      component: Schedules
    },
  ],
  mode: 'history'
})
