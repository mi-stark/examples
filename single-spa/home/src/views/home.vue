<template>
  <div class="app-home">
    <div class="home-left">
      <el-menu>
        <el-menu-item index="0">
          <router-link to="/app1">应用1</router-link>
        </el-menu-item>
        <el-menu-item index="1">
          <router-link to="/app2">应用2</router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="home-right">
      <div class="home-header">{{($route.params.path || []).join('/')}}</div>
      <div id="micro-app" class="home-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped lang="scss">
.app-home{
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
}
.home-left{
  width: 200px;
}
.home-right{
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.home-content{
  flex: 1;
  overflow: hidden;
}
</style>