import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import DetailPage from './views/DetailPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/detail-page',
      name: 'detail-page',
      component: DetailPage,
    },
  ],
});
