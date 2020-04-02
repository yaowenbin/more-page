<template>
  <div
    id="app"
    class="app-wrapper"
  >
    <!-- 模板生成 -->
    <Header></Header>

    <!-- 动态内容 走服务端渲染 -->
    <div class="app-main">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </div>

    <!-- 模板生成 -->
    <Footer></Footer>
    <Login />
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import Footer from './components/Footer'
import Header from './components/header/index'
import Login from './components/Login/index'
export default {
  components: {
    Footer,
    Header,
    Login
  },
  name: 'App',
  computed: {
    cachedViews () {
      return this.$store.state.cache.cachedViews
    },
    key () {
      return this.$route.path
    }
  }
}
</script>

<style>
.app-wrapper {
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 160px;
}
.ml-10{
  margin-left: 10px;
}
.mr-10{
  margin-right: 10px;
}
.mr-20{
  margin-right: 20px;
}
.mt-20{
  margin-top: 20px;
}
.mb20{
  margin-bottom: 20px;
}
.pb-20{
  padding-bottom: 20px;
}

.flex {
  display: flex;
}
.flex-x {
  flex-direction: row;
}
.flex-y {
  flex-direction: column;
}
.flex-x-start {
  justify-content: flex-start;
}
.flex-x-center {
  justify-content: center;
}
.flex-x-end {
  justify-content: flex-end;
}
.flex-x-between {
  justify-content: space-between;
}
.flex-x-around {
  justify-content: space-around;
}
.flex-y-start {
  align-items: flex-start;
}
.flex-y-center {
  align-items: center;
}
.flex-y-end {
  align-items: flex-end;
}
</style>
