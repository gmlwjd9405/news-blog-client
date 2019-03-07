<template>
<div>
  <div v-for="item in ask">{{ item.title }}</div>
</div>
</template>

<script>
import {
  fetchAskList
} from "../api/index.js";

export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    fetchAskList()
      .then(response => this.ask = response.data)
      .catch(error => console.log(error));
  },
};
</script>

<style>
</style>
