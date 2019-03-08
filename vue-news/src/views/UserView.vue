<template>
<div>
  <UserProfile>
    <div slot="karma">{{ this.$store.state.user.karma }}</div>
  </UserProfile>
</div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'

export default {
  components: {
    UserProfile,
  },
  created() {
    const userName = this.$route.params.id;

    // dispatch의 인자(payload)는 반드시 하나!
    // 값이 여러개 일 때는 하나의 객체로 만들어서 전달.
    this.$store.dispatch('FETCH_USER', userName);
  },
}
</script>

<style>

</style>
