import Vue from "vue";
import Vuex from "vuex";

import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  mutations: {
    /* 3. Mutation에서 받아온 데이터로 state의 속성값을 변경한다. */
    // 첫번째 인자: state, 두번째 인자: 받아온 data
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
  },
  /* 1. BackEnd에서 불러온 API를 actions에서 호출 */
  // 즉, 비동기 호출은 모두 actions에서 처리
  actions: {
    FETCH_NEWS(context) { // context: mutations에 접근할 수 있는 인자
      fetchNewsList()
        .then(response => {
          console.log(response.data);
          // state.news = response.data; // 불가능

          /* 2. actions에서 받아온 데이터를 Mutations를 통해서 state에 저장 */
          context.commit("SET_NEWS", response.data); // commit: mutations의 SET_NEWS 실행(제공되는 API)
        })
        .catch(error => {
          console.log(error);
        });
    },
    /* Distructuring 이용 - 인자값의 속성을 바로 사용 */
    FETCH_JOBS({ commit }) { 
      fetchJobsList()
        .then(({ data }) => {
          commit("SET_JOBS", data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    FETCH_ASK(context) {
      fetchAskList()
        .then(response => {
          context.commit("SET_ASK", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
  }
});