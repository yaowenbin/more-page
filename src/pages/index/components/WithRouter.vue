<template lang="html">
  <div class="with-router">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>
          index-page
        </span>
      </div>
      <el-row>
        <el-button type="success" @click="jump"
          >由路由跳转到--Index Page</el-button
        >
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    jump () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.with-router {
  a {
    color: #fff;
  }
  .box-card {
    width: 60%;
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
