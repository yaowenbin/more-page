<template>
  <modal
    name="login"
    :width="384"
    :draggable="true"
    :styles="{'border-radius':'12px','min-height':'390px'}"
  >
    <div class="login-modal-header">
      <ul class="login-tab">
        <li
          class="login-tab_item"
          v-for="(item, index) in actions"
          :key="index"
          :class="{'active':active===index}"
          @click="changeTab(index)"
        >{{item}}</li>
      </ul>
      <svg-icon
        class="login-close"
        icon-class="close"
        @click.native="hide"
      />
    </div>
    <component :is="componentId"></component>
  </modal>
</template>

<script>
// prelogin 生成密钥，登录时需验证
// 同一ip多次试错登录、注册 如何限制？
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data () {
    return {
      active: 0,
      actions: ['登录', '注册'],
      componentId: 'LoginForm'
    }
  },

  mounted () {
    this.$modal.show('login', { foo: 'bar' })
  },
  methods: {
    changeTab (index) {
      this.active = index
      this.componentId = index === 0 ? 'LoginForm' : 'RegisterForm'
    },
    show () {
      this.$modal.show('login')
    },
    hide () {
      this.$modal.hide('login')
    }
  }
}
</script>

<style lang="scss">
.login-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 25px;
  color: #787d82;
  .login-close {
    &:hover {
      transform: scale(1.1);
      color: #f20d0d;
    }
  }
  .login-tab {
    display: flex;
    align-items: center;
    height: 49px;
    &_item {
      font-size: 16px;
      font-weight: 700;

      text-align: center;
      line-height: 49px;
      height: 49px;
      width: 80px;
      cursor: pointer;
      // &:hover:after {
      //   content: " ";
      //   width: 16px;
      //   height: 4px;
      //   line-height: 4px;
      //   background: #f20d0d;
      //   border-radius: 2px;
      //   display: block;
      //   margin: 0 auto;
      // }
      &.active:after {
        content: " ";
        width: 16px;
        height: 4px;
        line-height: 4px;
        background: #f20d0d;
        border-radius: 2px;
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>
