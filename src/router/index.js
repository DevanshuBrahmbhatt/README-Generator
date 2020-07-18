import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/detail',
    name: 'detail',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/detail.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
