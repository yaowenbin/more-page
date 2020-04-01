<template>
  <!-- 栅格布局 适配到13.3寸笔记本-->

  <header>
    <el-row
      :gutter="0"
      type="flex"
      align="center"
    >
      <!-- 24列，按1980尺寸设计 -->
      <el-col :xl="14">
        <div class="flex align-center">
          <div class="app_logo">
            <img
              width="267"
              height="32"
              src="../../assets/images/logo.png"
              alt="网站logo"
              srcset=""
            />
          </div>
          <ul class="app_nav">
            <li
              class="app_nav_item"
              v-for="(item, index) in nav"
              :key="index"
            >
              <em class="nav-link">{{ item.name }}</em>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col
        :xl="4"
        class="hidden-md-and-down"
      >
        <div class="app_search flex align-center">
          <div class="search-box">
            <input
              id="search-input"
              v-model="searchContent"
              type="text"
              placeholder="搜索"
              @keyup.enter="search"
            />
            <svg-icon
              icon-class="search"
              @click.stop="search"
            />
          </div>
        </div>
      </el-col>

      <el-col :xl="6">
        <div class="app_user">
          <div
            ref="shop"
            class="app_user_shop"
          >
            <svg-icon
              icon-class="car"
              style="margin-right:6px"
            />
            <em>购物车</em>
          </div>
          <div class="flex align-center">
            <svg-icon
              icon-class="bell"
              style="margin-left:20px;width:30px;height:30px;color:#fff"
            ></svg-icon>
            <div class="app_nav_item"><em class="nav-link">我的课程</em></div>
            <div class="app_nav_item">
              <em class="nav-link">登录</em> / <em class="nav-link">注册</em>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </header>

</template>
<script>
export default {
  data () {
    return {
      nav: [
        {
          name: '首页',
          path: ''
        },
        {
          name: '公需科目',
          path: ''
        },
        {
          name: '专业科目',
          path: ''
        },
        {
          name: '技能在线',
          path: ''
        },
        {
          name: '湖南云党建',
          path: ''
        }
      ],
      // 搜索组件独立维护
      searchContent: ''
    }
  },
  methods: {
    search () { }
  }
}
</script>

<style lang="scss">
.nav-link {
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    color: #fa2005;
  }
}

header {
  width: 100%;
  height: 72px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 900;
  background: rgba(#fff, 0.96);
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
}

.app_logo {
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  background: rgba(0, 0, 0, 0.9);
}

.app_nav {
  display: flex;
  height: 72px;
  min-width: 500px;
}

.app_nav_item {
  padding: 0 10px;
  display: block;
  color: #07111b;
  text-align: center;
  font-size: 16px;
  height: 72px;
  line-height: 72px;
  position: relative;
}

.app_search {
  height: 72px;
}
.search-box {
  height: 44px;
  width: 240px;
  background: #e9e9e9;
  border-radius: 4px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    width: 150px;
    height: 30px;
  }
}
.app_user {
  height: 72px;
  min-width: 400px;
  // background: yellow;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &_shop {
    // border: 1px solid #fa2005;
    // border-radius: 20px;
    // padding: 8px 20px;
    // width: 80px;
    // color: #fa2005;
    // display: flex;
    // justify-content: center;

    display: inline-block;
    padding: 0 18px;
    width: auto;
    box-sizing: border-box;
    border: 1px solid #d9dde1;
    border-radius: 18px;
    height: 36px;
    line-height: 34px;
    color: #787d82;
    text-align: center;
  }
}
</style>
