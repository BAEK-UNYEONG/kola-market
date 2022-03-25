import {createRouter, createWebHistory} from 'vue-router'

import Main from '@/views/Main.vue'
import Payment from '@/views/Payment.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    }
  ]
})

export default router
