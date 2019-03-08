import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchCommentItem } from "../api/index.js";

export default {
  /* 1. BackEnd에서 불러온 API를 actions에서 호출 */
  // 즉, 비동기 호출은 모두 actions에서 처리
  FETCH_NEWS(context) {
    // context: mutations에 접근할 수 있는 인자
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
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchCommentItem(itemId)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
};
