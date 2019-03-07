<template>
<div>
  <div v-for="user in users">{{ user.title }}</div>
</div>
</template>

<script>
import {fetchNewsList} from '../api/index.js'

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    /* callback의 this 바인딩을 View Component를 바라보도록! (화살표 함수는 없어도 됨) */
    // var vm = this; 

    // axios.get('https://api.hnpwa.com/v0/news/1.json')
    fetchNewsList()
      .then(response => {
        this.users = response.data;
        console.log(response);
      })
      .catch(error => console.log(error));
  },
}
</script>

<style>

</style>
