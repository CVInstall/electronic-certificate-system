<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-row type="flex" justify="space-around">
          <div class="box user" @click="UserLogin">用户</div>
        </el-row>
      </el-col>

      <el-col :span="12">
        <el-row type="flex" justify="space-around">
          <div class="box operator" @click="OperatorLogin">管理员</div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    Userlogin () {
      this.$router.push({
        path: './Login.vue'
      })
    }
  }
}
</script>

<style scoped>
.box {
  color: #000;
  width: 50%;
  height: 150px;
  line-height: 150px;
  font-size: 40px;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  margin-top: 7%;
  transition: 1s linear;
  background: #00ae9d;
}
.box:hover {
  transform: translateY(-12px);
}
.box::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -20px;
  height: 10px;
  width: 50%;
  border-radius: 50%;
  background-color: rgba(95, 94, 94, 0.8);
  transform: translate(-50%, 0);
}
.box:hover:after {
  transform: translate(-50%, 0px) scale(0.75);
}
</style>
