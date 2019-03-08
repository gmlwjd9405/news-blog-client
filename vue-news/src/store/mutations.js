export default {
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
  SET_USER(state, user) {
    state.user = user;
  },
  SET_ITEM(state, item) {
    state.item = item;
  },
};
