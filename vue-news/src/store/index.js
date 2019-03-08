import Vue from "vue";
import Vuex from "vuex";

import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  getters: { 
    fetchedAsk(state) {
      return state.ack;
    }
  },
  mutations, // 3. data를 state에 저장 
  actions, // 1. api 호출 및 mutations에 data commit
});
