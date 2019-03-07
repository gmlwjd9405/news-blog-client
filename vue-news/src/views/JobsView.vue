<template>
<div>
  <div v-for="job in this.$store.state.jobs">{{ job.title }}</div>
</div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style>
</style>