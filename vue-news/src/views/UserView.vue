<template>
<div>
  <p>name: {{ userInfo.id }}</p>
  <p>karma: {{ userInfo.karma }}</p>
  <p>create: {{ userInfo.created }}</p>
</div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
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
