<template>
  <div>
    <!-- title을 클릭했을 때 item 안의 url(v-bind)로 이동하도록 설정 -->
    <ul class="news-list">
      <li v-for="item in fetchedAsk" class="post">
        <!-- 포인트 영역 -->
        <div class="points">{{ item.points }}</div>

        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <!-- <a v-bind:href="item.url">{{ item.title }}</a> -->
            <router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    // #4 -> in fetchedAsk (vuex의 getters 속성명과 동일)
    ...mapGetters([
      "fetchedAsk" // 배열 표기법
    ])

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

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>
