<template>
  <div class="login">
    <s-header :title="type === 'login' ? '登录' : '注册'"></s-header>
    <img src="https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png" alt class="logo" />
    <div v-if="type === 'login'" class="login-body login">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="verify"
          name="verify"
          label="验证码"
          placeholder="验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        >
          <template #button>
            <!-- 验证码 -->
            <VueImageVerify ref="verifyRef"></VueImageVerify>
          </template>
        </van-field>

        <div style="margin: 16px;">
          <div class="link-register" @click="toggle('register')">立即注册</div>
          <van-button round block type="primary" color="#1baeae" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <div v-else class="login-body register">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="verify"
          name="verify"
          label="验证码"
          placeholder="验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        >
          <template #button>
            <!-- 验证码 -->
            <VueImageVerify ref="verifyRef"></VueImageVerify>
          </template>
        </van-field>

        <div style="margin: 16px;">
          <div class="link-login" @click="toggle('login')">已有登录账号</div>
          <van-button round block type="primary" color="#1baeae" native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import VueImageVerify from '@/components/VueImageVerify'
import { reactive, ref, toRefs } from 'vue'
import { Toast } from 'vant';
import { login, register } from '@/service/user'
import md5 from 'js-md5'
import { setLocal } from '../common/js/utils'
// import { useRouter } from 'vue-router';
export default {
  setup() {
    const verifyRef = ref(null)
    // const router = useRouter()
    const state = reactive({
      username: '',
      password: '',
      verify: '',
      type: 'login'
    })

    const onSubmit = async(values) => {
      // console.log(values);
      // console.log(state.verify, verifyRef.value.imgCode);
      // 判断验证码是否正确
      if (state.verify !== verifyRef.value.imgCode) {
        Toast.fail('验证码有误');
        return
      }

      // 发请求
      if (state.type === 'login') {
        const { data } = await login({
          'loginName': values.username,
          'passwordMd5': md5(values.password)
        })
        // console.log(data);
        // 将token存在本地
        setLocal('token', data)
        // router.push('/')
        window.location.href = '/' // 需要刷新页面，否则axios.js里面的token不会重置
      } else {
        // 注册
        await register({
          'loginName': values.username,
          'password': values.password
        })
        Toast.success('注册成功')
        state.type = 'login'
        state.verify = ''
      }
      
    }

    const toggle = (v) => {
      state.type = v
      state.verify = ''
    }

    return {
      ...toRefs(state),
      onSubmit,
      verifyRef,
      toggle
    }
  },
  components: {
    sHeader,
    VueImageVerify
  }
}
</script>

<style lang="less" scoped>
.login {
  .logo {
    width: 120px;
    height: 120px;
    display: block;
    margin: 80px auto 20px;
  }
  .login-body {
    padding: 0 20px;
  }
  .login {
    .link-register {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }
  .register {
    .link-login {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }
  .verify-bar-area {
    margin-top: 24px;
    .verify-left-bar {
      border-color: #1baeae;
    }
    .verify-move-block {
      background-color: #1baeae;
      color: #fff;
    }
  }
  .verify {
    > div {
      width: 100%;
    }
    display: flex;
    justify-content: center;
    .cerify-code-panel {
      margin-top: 16px;
    }
    .verify-code {
      width: 40% !important;
      float: left !important;
    }
    .verify-code-area {
      float: left !important;
      width: 54% !important;
      margin-left: 14px !important;
      .varify-input-code {
        width: 90px;
        height: 38px !important;
        border: 1px solid #e9e9e9;
        padding-left: 10px;
        font-size: 16px;
      }
      .verify-change-area {
        line-height: 44px;
      }
    }
  }
}
</style>