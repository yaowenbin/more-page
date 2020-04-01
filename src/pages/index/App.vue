<template>
  <div
    id="app"
    class="app-wrapper"
  >
    <Header></Header>

    <div class="app-main">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import Footer from './components/Footer'
import Header from './components/header/index'

export default {
  components: {
    Footer,
    Header
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
</style>
