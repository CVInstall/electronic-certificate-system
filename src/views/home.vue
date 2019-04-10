<template>
  <div>
    <div class="home-container">
      <div class="content">
        <el-row>
          <div class="head">
            <p>欢迎使用电子证照系统，请选择登录方式</p>
          </div>
        </el-row>
        <el-main>
          <LoginFrame></LoginFrame>
          <router-view/>>
        </el-main>
      </div>
    </div>
  </div>
</template>

<script>
import LoginFrame from '../components/asyncComponents/Login'
export default {
  name: 'home',
  components: { LoginFrame },
  mounted () {
    this.LoginFrame()
  },
  methods: {
    LoginFrame () {
      var content = document.querySelector('.home-container')
      content.style.height = document.documentElement.clientHeight
    }

  }
}
</script>

<style scoped>
.home-container {
  width: 100%;
  min-height: 770px;
  background-image: url("../assets/timg.jpg");
  background-size: 100% 100%;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 55%;
  height: 45%;
  background: rgba(0, 0, 0, 0.9);
  box-shadow: 0 0 1px #fff, 0px 0px 1px #fff inset;
  border-radius: 20px;
  transition: 0.5s;
  animation: 1.2s fadeInUp;
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
  color: rgb(214, 202, 202);
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  border-bottom: 1px solid #eee;
  text-shadow: -1px 0 rgb(216, 88, 88);
}
</style>
