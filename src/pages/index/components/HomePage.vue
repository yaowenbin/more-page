<template>
  <div class="home-page">
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <span @click="test ()">
          index-page 點點點
        </span>
      </div>
      <el-row>
        <el-button
          type="success"
          @click="jump"
        >通过路由跳转到with-router</el-button>
      </el-row>
      <el-row>
        <el-button type="primary">
          <a href="s001.html">跳转到多页面--s001</a>
        </el-button>
      </el-row>
      <el-row>
        <el-button type="primary">
          <a href="s002.html">跳转到多页面--s002</a>
        </el-button>
      </el-row>
      <el-row>
        <el-button type="primary">
          <a href="s003.html">跳转到多页面--s003</a>
        </el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    jump () {
      this.$router.push({
        name: 'with-router'
      })
    },
    test () {

    }
  },
  mounted () {
    console.log(Window.setting)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home-page {
  a {
    color: #fff;
    &.author {
      color: #666;
    }
  }
  .box-card {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
