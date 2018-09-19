import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('./views/Pay.vue'),
    },
    {
      path: '/pay/success',
      name: 'pay/success',
      component: () => import('./views/PaySuccess.vue'),
    },
    {
      path: '/ticket/check',
      name: 'ticket/check',
      component: () => import('./views/TicketCheck.vue'),
    },
    {
      path: '/ticket/success',
      name: 'ticket/success',
      component: () => import('./views/TicketSuccess.vue'),
    },
    {
      path: '/ticket/fail',
      name: 'ticket/fail',
      component: () => import('./views/TicketFail.vue'),
    },
  ],
});
