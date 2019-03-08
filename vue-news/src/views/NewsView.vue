<template>
<div>
  <!-- title을 클릭했을 때 item 안의 url(v-bind)로 이동하도록 설정 -->
  <ul class="news-list">
    <li v-for="item in this.$store.state.news" class="post">
      <!-- 포인트 영역 -->
      <div class="points">{{ item.points }}</div>

      <!-- 기타 정보 영역 -->
      <div>
        <p class="news-title">
          <a v-bind:href="item.url">{{ item.title }}</a>
        </p>
        <small class="link-text">
          by
          <!-- <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link> -->
          <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
        </small>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS"); // vuex actions를 dispatch
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
