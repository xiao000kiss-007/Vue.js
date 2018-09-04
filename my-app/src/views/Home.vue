<template>
  <div class="home">
       <h2>首页</h2>
        <div>
          <div class="grid-content bg-purple-dark">
           <img src="../assets/logo.png">
        </div>
      </div>
    <h1>欢迎来到KAdmin管理系统v1.0.0</h1>
    <el-row>
      <el-button type="primary"><router-link to="/kadmin">进入系统</router-link></el-button>
     <router-view></router-view>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import KAdmin from '@/components/KAdmin.vue'

export default {
  name: 'home',
  components: {
    KAdmin
  }
}
</script>
