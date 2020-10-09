import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/views/Home.vue'

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ceremony',
    name: 'Ceremony',
    component: () => import('@/views/Ceremony.vue')
  },
  {
    path: '/place',
    name: 'Place',
    component: () => import('@/views/Place.vue')
  },
  {
    path: '/bank',
    name: 'Bank',
    component: () => import('@/views/Bank.vue')
  },
  {
    path: '/master/:name',
    name: 'master',
    component: () => import('@/views/Master.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;