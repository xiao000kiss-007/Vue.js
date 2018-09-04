<template>
  <div id="app">
    <h2>首页</h2>
  </div>
</template>

<script>
import KAdmin from './components/KAdmin.vue'

export default {
  name: 'app',
  components: {
    KAdmin
  }
}
</script>

<style scoped lang="scss">

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  a{
    text-decoration: none;
    font-size: 14px;
    color: aliceblue;
  }
}
</style>
