<template>
<div>
  <div v-for="user in this.$store.state.news">{{ user.title }}</div>
</div>
</template>

<script>
import {
  fetchNewsList
} from "../api/index.js";

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS'); // vuex actions를 dispatch

    //   // axios.get('https://api.hnpwa.com/v0/news/1.json') => api index.js
    //   fetchNewsList() // 1. 데이터 호출 부분 => vuex actions
    //     .then(response => {
    //       this.users = response.data; // 2. 데이터 저장 부분
    //       console.log(response);
    //     })
    //     .catch(error => console.log(error));
  }
};
</script>

<style>
</style>
