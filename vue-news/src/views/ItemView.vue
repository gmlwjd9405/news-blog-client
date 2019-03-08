<template>
  <div>
    <p>title: {{ itemInfo.title }}</p>
    <div>{{ itemInfo.content }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    itemInfo() {
      return this.$store.state.item;
    },
  },
  created() {
    // 넘어온 itemId 의 값
    const itemId = this.$route.params.id;

    this.$store.dispatch('FETCH_ITEM', itemId);
  },
}
</script>

<style>

</style>
