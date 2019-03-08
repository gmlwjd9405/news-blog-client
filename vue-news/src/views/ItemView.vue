<template>
<div-html>
  <!-- 사용자 상세 정보 -->
  <section>
    <UserProfile>
      <!-- <router-link slot="username" :to="`/user/${fetchedItem.user}`">
        {{ fetchedItem.user }}
      </router-link> -->
    </UserProfile>
  </section>

  <!-- 질문 타이틀 -->
  <section>
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
import UserProfile from '../components/UserProfile.vue';
import {
  mapGetters
} from "vuex";

export default {
  components: {
    UserProfile,
  },
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
