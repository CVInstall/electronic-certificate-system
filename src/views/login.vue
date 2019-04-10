<template>
  <div>
    <div class="home-container">
      <div class="content shadow">
        <el-row>
          <div class="head">
            <p>欢迎使用电子证照系统</p>
          </div>
        </el-row>

        <el-row>
          <div class="login-form">
            <div style="margin: 20px;"></div>
            <el-form :label-position="labelPosition" label-width="90px" ref="loginData" :model="loginData" :rules="loginData.rules"
              hide-required-asterisk>
              <el-form-item prop="name" label="用户名" style="margin-bottom: 30px;">
                <el-input v-model="loginData.name"></el-input>
              </el-form-item>
              <el-form-item prop="password" label="密码">
                <el-input type="password" v-model="loginData.password" @keyup.enter.native="login('loginData')"></el-input>
              </el-form-item>
              <el-button @click="login('loginData')" type="primary" plain>登录</el-button>
            </el-form>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      labelPosition: 'right',
      loginData: {
        name: '',
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { pattern: /^[A-Za-z0-9]+$/, message: '用户名不能为汉字' }
          ],
          password: [
            { required: true, message: '请输入登录密码', trigger: 'blur' },
            { pattern: /^[A-Za-z0-9]+$/, message: '密码不能为汉字' }
          ]
        }
      }
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.loginData.name === '123456' && this.loginData.password === '123456') {
            this.$router.push({
              path: '/upload'
            })
          } else {
            this.$message({
              message: '用户名或密码不正确',
              type: 'error',
              duration: 3 * 1000
            })
          }
          return true
        }
        return false
      })
    }
  }
}
</script>

<style scoped>
.home-container {
  position: relative;
  min-height: 770px;
  background-image: url("../assets/login-back-image.jpg");
  background-size: 100% 100%;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 30%;
  height: 36%;
  background: rgba(240, 255, 255, 0.4);
  box-shadow: 0 0 8px #000;
  transition: 0.5s;
  animation: 1.5s fadeInUp;
}
.shadow {
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.3),
    0px 0px 20px rgba(0, 0, 0, 0.1) inset;
}

.shadow::before,
.shadow::after {
  content: "";
  position: absolute;
  z-index: -1;
}

.shadow::before,
.shadow::after {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: 15px;
  left: 10px;
  width: 50%;
  height: 20%;
}

.shadow::before,
.shadow::after {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: 15px;
  left: 10px;
  width: 50%;
  height: 20%;

}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.head {
  color: #fff;
  font-size: 20px;
  /* font-weight: bold; */
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid #fff;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

.el-input {
  width: 90%;
  background: #fdfdfd;
  border: 2px solid #dbdee1;
  box-shadow: 0 2px 2px 0 rgba(7, 0, 2, 0.25);
}
.el-form-item__label {
  font-size: 20px;
  font-weight: bold;
}
.el-button {
  position: absolute;
  right: 8%;
  bottom: -30%;
  width: 120px;
  background: #00aaf3;
  color: #fff;
  font-size: 18px;
}
</style>
