<template>
  <div class="header">
    <!-- 내부적으로 a tag로 변환, to: 이동할 url -->
    <router-link to="/news">News</router-link>|
    <router-link to="/ask">Ask</router-link>|
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 클래스명 */
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}

/* 눌렸을 때의 색 설정 */
.header a:active {
  color:#35495e;
}

/* header 클래스의 a 태그 색 설정 */
.header a {
  color: white;
}
</style>
