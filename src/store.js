import Vue from 'vue';
import Vuex from 'vuex';
import listings from '../listings.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listings,
  },
  mutations: {

  },
  actions: {

  },
});
