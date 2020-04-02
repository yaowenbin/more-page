<template>
  <div>
    <!-- 校验后，填写验证码 -->
    <div
      id="init"
      v-show="confirmCode"
    >
      <div class="registe-form">
        <div class="registe-form_input">
          <span class="registe-form_area">+86</span>
          <input
            class="ml-10"
            type="text"
            v-model="loginForm.cellphone"
            maxlength="11"
            autocomplete="off"
            placeholder="请输入注册手机"
          >
        </div>

        <p
          class="registe-form_error"
          date-txt="请输入正确的邮箱或手机号"
        ></p>
        <div class="flex registe-form_input flex-x-between flex-y-center">
          <input
            type="text"
            v-model="loginForm.password"
            maxlength="6"
            autocomplete="off"
            placeholder="请输入验证码"
          >
          <div class="flex flex-y-center">
            <svg-icon
              class="refresh-icon"
              icon-class="refresh"
              @click.native="refresh"
            ></svg-icon>
            <GVerify @code="receiveCode"></GVerify>
          </div>
        </div>
        <p
          class="registe-form_error"
          date-txt="请输入正确的密码"
        ></p>
      </div>

      <div class="registe-modal-footer ">
        <label
          for="auto-signin"
          class="flex flex-y-center login-checkbox"
          hidefocus="true"
        >
          <input
            type="checkbox"
            checked="checked"
            class="mr-10"
            id="auto-signin"
          >
          <p class="login-tip">
            同意<el-link
              type="primary"
              :underline="false"
            >《技能在线网注册协议》</el-link> & <el-link
              type="primary"
              :underline="false"
            >《隐私政策》</el-link>
          </p>
        </label>

        <el-button
          style="width:100%"
          type="danger"
          round
          size="large"
          @click="confirmCode=false"
        >注册</el-button>
      </div>
    </div>

    <div v-show="!confirmCode">
      <div class="phoneVerityBox">
        <p class="title">填写短信验证码密码完成注册</p>
        <p class="subtitle">短信验证码已发送至 <span class="js-phoneNumber">+86 {{loginForm.cellphone}}</span></p>
        <div class="registe-form">
          <div class="flex registe-form_input flex-x-between flex-y-center">
            <input
              type="text"
              v-model="loginForm.password"
              maxlength="6"
              autocomplete="off"
              placeholder="请输入短信验证码"
            >
            <div class="flex flex-y-center">
              <span
                class="reSend"
                v-show="loading"
              >重新发送 {{count}}</span>
              <span
                class="reSend active"
                v-show="!loading"
                @click="getCode"
              > 重新发送</span>
            </div>
          </div>
          <p
            class="registe-form_error"
            date-txt="请输入正确的密码"
          ></p>
          <div class="flex registe-form_input flex-y-center">
            <input
              type="text"
              style="width:100%"
              v-model="loginForm.password"
              maxlength="20"
              placeholder="6-20位,字母/数字/字符至少包含两种"
            >
            <!-- 明文显示功能 -->
          </div>
          <p
            class="registe-form_error"
            date-txt="请输入8-20位字母、数字或字符，至少包含两种！"
          ></p>
        </div>

      </div>

      <div class="registe-modal-footer ">
        <el-button
          style="width:100%"
          type="danger"
          round
          size="large"
        >完成</el-button>
        <p class="backNotify">返回修改手机号</p>
      </div>
    </div>

  </div>
</template>
<script>
// TODO:css世界 - 学习如何编写好css
import GVerify from '@/components/GVerify'
export default {
  components: { GVerify },
  data () {
    return {
      loginForm: {
        cellphone: '', // 用户名
        password: '', // 登录密码
        autoLogin: true // 是否自动登录0 ，1
      },
      confirmCode: true,
      code: '',
      count: 60,
      timer: null,
      loading: false
    }
  },
  methods: {
    receiveCode (val) {
      this.code = val
    },
    refresh () {
      console.log('通知vg组件更新code')
      this.$bus.$emit('refresh', true)
    },
    getCode () {
      // 发送短信
      const TIME_COUNT = 60

      if (!this.timer) {
        this.count = TIME_COUNT
        this.loading = true
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.loading = false
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
        // 自动销毁定时器
        this.$once('hook:beforeDestroy', () => {
          clearInterval(this.timer)
          this.timer = null
        })
      }
    }
  }
}
</script>

<style lang="scss">
.phoneVerityBox {
  .title {
    margin-bottom: 4px;
    font-size: 16px;
    color: rgb(28, 31, 33);
    text-align: center;
    line-height: 24px;
  }
  .subtitle {
    font-size: 14px;
    color: rgb(84, 92, 99);
    line-height: 22px;
    margin-bottom: 20px;
    text-align: center;
    span {
      color: #1c1f21;
    }
  }
  .reSend {
    top: 12px;
    right: 14px;
    font-size: 14px;
    color: #9199a1;
    line-height: 24px;
    &.active {
      color: #1481b8;
      &:hover {
        color: #19a1e6;
        cursor: pointer;
      }
    }
  }
}

.registe-modal-footer {
  padding: 0 32px;
  .login-checkbox {
    color: #9199a1;
    padding-bottom: 20px;
  }
  .login-tip {
    font-size: 12px;
    color: #717a84;
    text-align: center;
    display: flex;
    align-items: center;
  }
  .backNotify {
    color: #777c81;
    margin-top: 15px;
    cursor: pointer;
    text-align: center;
  }
}

.registe-form {
  padding: 0 32px;
  &_area {
    font-size: 16px;
    color: #1c1f21;
    text-align: left;
    line-height: 24px;
  }
  &_input {
    width: 100%;
    height: 48px;
    line-height: 20px;
    box-sizing: border-box;
    padding: 14px;
    box-shadow: 2px 0 5px 0 #fff;
    background: rgba(28, 31, 33, 0.06);
    border-radius: 8px;
    display: flex;
    align-items: center;
  }
  &_error {
    font-size: 12px;
    height: 20px;
    color: #ef1300;
    padding: 4px 0;
  }
  .refresh-icon {
    color: #9199a1;
    margin-right: 10px;
    transition: All 0.4s ease-in-out;
    &:hover {
      transform: rotate(360deg);
    }
  }
}
</style>
