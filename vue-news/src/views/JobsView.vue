<template>
<div>
  <!-- title을 클릭했을 때 item 안의 url(v-bind)로 이동하도록 설정 -->
  <p v-for="job in this.$store.state.jobs">
    <a v-bind:href="job.url">{{ job.title }}</a>
    <small>{{ job.time_ago }} {{ job.domain }}</small>
  </p>
</div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
  }
};
</script>

<style>
</style>
