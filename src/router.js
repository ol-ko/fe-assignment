import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import DetailsPage from './views/DetailsPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/details-page',
      name: 'details-page',
      component: DetailsPage,
    },
  ],
});
