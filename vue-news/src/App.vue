<template>
  <div id="app">
    <!-- url 주소에 따라서 지정한 Component가 뿌려짐 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  methods: {
    fetchDate() {
      console.log('hello');
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
