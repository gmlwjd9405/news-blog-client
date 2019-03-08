<template>
<div>
  <!-- title을 클릭했을 때 item 안의 url(v-bind)로 이동하도록 설정 -->
  <p v-for="item in fetchedAsk">
    <a v-bind:href="item.url">{{ item.title }}</a>
    <small>{{ item.time_ago }} by {{ item.user }}</small>
  </p>
</div>
</template>

<script>
import {
  mapState, mapGetters
} from "vuex";

export default {
  computed: {
    // #4 -> in fetchedAsk (vuex의 getters 속성명과 동일)
    ...mapGetters([
      'fetchedAsk' // 배열 표기법 
    ]),

    // #3 -> in askItems
    // ...mapGetters({
    //   askItems: 'fetchedAsk' // 객체 표기법 
    // }),

    // #2 -> in askItems
    // ...mapState({
    //   askItems: state => state.ask
    // }),
    
    // #1 -> in ask
    // ask() {
    //   return this.$store.state.ask;
    // },
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  }
};
</script>

<style>
</style>
