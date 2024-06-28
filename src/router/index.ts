import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'LoginView',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/admin/menu',
      name: 'adminMenu',
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/admin/menu/tablesOverview',
      name: 'tablesOverview',
      component: () => import('../views/AdminTablesView.vue')
    },
    {
      path: '/admin/menu/reservationsOverview',
      name: 'reservationsOverview',
      component: () => import('../views/AdminReservationsView.vue')
    },
    {
      path: '/confirmReservation/cancel',
      name: 'cancelReservationConfirmation',
      component: () => import('../views/ConfirmReservationCancelView.vue')
    },
    {
      path: '/confirmReservation/create',
      name: 'createReservationConfirmation',
      component: () => import('../views/ConfirmReservationView.vue')
    },
    {
      path: '/cancelReservation/:token',
      name: 'cancelReservation',
      component: () => import('../views/CancelReservationView.vue')
    },
    {
      path: '/createReservation',
      name: 'createReservation',
      component: () => import('../views/CreateReservationView.vue')
    }
  ]
})

export default router
