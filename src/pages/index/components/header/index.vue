<template>
  <!-- 慕课此处是典型的双飞翼布局 -->
  <header>
    <div class="fix-top-container">
      <div
        id="header_l"
        class="flex flex-x-start flex-y-center"
      >
        <img
          width="180"
          height="72"
          class="ml-20"
          src="../../assets/images/logo.png"
          alt="网站logo"
        />
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

      <div
        id="header_m"
        class="app_search"
      >
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

      <div
        id="header_r"
        class="app_user"
      >
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
            style="margin-left:20px;width:30px;height:30px;"
          ></svg-icon>
          <div class="app_nav_item"><em class="nav-link">我的课程</em></div>
          <div class="app_nav_item">
            <em class="nav-link">登录</em> / <em class="nav-link">注册</em>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>
<script>
export default {
  data () {
    return {
      nav: [
        {
          name: '免费课程',
          path: ''
        },
        {
          name: '实战课程',
          path: ''
        },
        {
          name: '金职位',
          path: ''
        },
        {
          name: '专栏',
          path: ''
        },
        {
          name: '猿问',
          path: ''
        }, {
          name: '手记',
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

.fix-top-container {
  display: flex;
  width: 100%;
  height: 72px;
  .app_nav {
    margin-left: -30px;
    display: flex;
    height: 72px;
    min-width: 480px;
    justify-content: flex-start;
    &_item {
      padding: 0 15px;
      display: block;
      color: #07111b;
      text-align: center;
      font-size: 16px;
      height: 72px;
      line-height: 72px;
      position: relative;
    }
  }
  .app_search {
    height: 72px;
    display: flex;
    align-items: center;
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
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &_shop {
      border: 1px solid #fa2005;
      border-radius: 20px;
      padding: 8px 20px;
      width: 80px;
      color: #fa2005;
      display: flex;
      justify-content: center;
    }
  }
  #header_m {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    overflow: hidden;
    min-width: 240px;
  }
  #header_l {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
  }
  #header_r {
    width: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
