<template>
  <div>
    <div class="login-form">
      <input
        type="text"
        v-model="loginForm.cellphone"
        maxlength="37"
        class="login-form_input"
        autocomplete="off"
        placeholder="请输入登录手机号/邮箱"
      >
      <p
        class="login-form_error"
        date-txt="请输入正确的邮箱或手机号"
      ></p>
      <div class="flex">
        <input
          type="text"
          v-model="loginForm.password"
          maxlength="37"
          class="login-form_input"
          autocomplete="off"
          placeholder="请输入验证码"
        >
        <span class="login-form_icon">获取验证码</span>
      </div>
      <p
        class="login-form_error"
        date-txt="请输入正确的密码"
      ></p>
    </div>

    <div class="login-modal-footer">
      <div class="flex flex-x-between pb-20">
        <label
          for="auto-signin"
          class="flex flex-y-center login-checkbox"
          hidefocus="true"
        ><input
            type="checkbox"
            checked="checked"
            class="mr-10"
            id="auto-signin"
          >7天内自动登录
        </label>
        <div>
          <!-- link -->
          <el-link
            type="info"
            :underline="false"
          >找回密码</el-link>
          <!-- 分割线组件 -->
          <el-divider direction="vertical"></el-divider>
          <el-link
            type="info"
            :underline="false"
          >无法使用</el-link>
        </div>
      </div>
      <!-- 按钮组件 -->
      <el-button
        style="width:100%"
        type="danger"
        round
        size="large"
      >登录</el-button>

      <p class="login-tip mt-20">
        登录即同意技能在线网<el-link
          type="primary"
          :underline="false"
        >《隐私政策》</el-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        cellphone: '', // 用户名
        password: '', // 登录密码
        autoLogin: true // 是否自动登录0 ，1
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login-modal-footer {
  padding: 0 32px;
  .login-checkbox {
    color: #9199a1;
  }
  .login-tip {
    font-size: 12px;
    color: #717a84;
    text-align: center;
  }
}

.login-form {
  padding: 0 32px;
  &_input {
    width: 100%;
    height: 48px;
    line-height: 20px;
    box-sizing: border-box;
    padding: 14px;
    box-shadow: 2px 0 5px 0 #fff;
    background: rgba(28, 31, 33, 0.06);
    border-radius: 8px;
    border: 0;
  }
  &_error {
    font-size: 12px;
    height: 20px;
    color: #ef1300;
    padding: 4px 0;
  }
  &_icon {
    margin-left: -100px;
    margin-top: 15px;
    width: 100px !important;
    height: 30px !important;
    color: #9199a1;
    text-align: center;
    font-size: 12px;
  }
}
</style>
