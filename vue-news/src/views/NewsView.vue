<template>
<div>
  <!-- title을 클릭했을 때 item 안의 url(v-bind)로 이동하도록 설정 -->
  <p v-for="item in this.$store.state.news">
    <a v-bind:href="item.url">{{ item.title }}</a>
    <small>
      {{ item.time_ago }} by 
      <!-- <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link> -->
      <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
    </small>
  </p>
</div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS"); // vuex actions를 dispatch
  }
};
</script>

<style>
</style>
