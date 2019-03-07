<template>
  <div id="app">
    <ToolBar></ToolBar>
    <!-- url 주소에 따라서 지정한 Component가 뿌려짐 -->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components: {
    ToolBar,
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
