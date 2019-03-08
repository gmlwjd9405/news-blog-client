<template>
<div-html>
  <!-- 질문 상세 정보 -->
  <section>
    <div class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>
      <div class="user-description">
        <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
        <div class="time">{{ fetchedItem.time_ago }}</div>
      </div>
    </div>
    <h2>{{ fetchedItem.title }}</h2>
  </section>

  <!-- 질문 댓글 -->
  <section>
    <!-- <div>{{ fetchedItem.content }}</div> -->

    <!-- tag 인식 - XSS 주의 -->
    <div v-html="fetchedItem.content"></div>
  </section>
</div-html>
</template>

<script>
import {
  mapGetters
} from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedItem"])
  },
  created() {
    // 넘어온 itemId 의 값
    const itemId = this.$route.params.id;

    this.$store.dispatch("FETCH_ITEM", itemId);
  }
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>
