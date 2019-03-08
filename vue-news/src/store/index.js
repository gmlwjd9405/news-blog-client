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
    user: {}, // 객체 
    item: [], // 배열
  },
  /* computed와 동일한 속성 */
  getters: { 
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    }
  },
  mutations, // 3. data를 state에 저장 
  actions, // 1. api 호출 및 mutations에 data commit
});
