<template>
  <div class="dispaly-style">
    <!-- 文字编辑 -->
    <el-col :span="10">
      <div class="from-area">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="上传者" prop="name">
            <el-input v-model="ruleForm.name" placeholder="如：' 张三 '" clearable></el-input>
          </el-form-item>
          <el-form-item label="文件类型" prop="type">
            <el-input v-model="type" placeholder="请输入上传文件类型" clearable></el-input>
          </el-form-item>
          <el-form-item label="上传时间" required>
            <el-col :span="12">
              <el-form-item prop="date1" style="padding:0">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <!-- <el-form-item label="即时配送" prop="delivery">
            <el-switch v-model="ruleForm.delivery"></el-switch>
          </el-form-item> -->
          <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="备注" prop="remark">
            <el-input type="textarea" v-model="ruleForm.remark"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="info" icon="el-icon-refresh" @click="resetForm('ruleForm')">重置信息</el-button>
            <el-button type="primary" icon="el-icon-edit" @click="submitForm('ruleForm')">立即创建</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>

    <!-- 上传图片 -->
    <el-col :span="14" class="upload-area">
      <div class="upload-area">
        <el-popover placement="top-start" title="上传区域" width="200" trigger="hover" content="点击“+”进行上传">
          <!-- <el-button slot="reference">hover 激活</el-button> -->
        </el-popover>
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'upload',
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      ruleForm: {
        name: '',
        type: '',
        date1: '',
        date2: '',
        delivery: false,
        resource: '',
        remark: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入上传事件名称', trigger: 'blur' },
          { min: 7, max: 14, message: '长度在 3 到 5 个字符', trigger: 'blur' },
          { pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/, message: '事件名称不能包含特殊字符' }
        ],
        type: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        activity: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        remark: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.dispaly-style {
  width: 100%;
  min-height: 770px;
  overflow: hidden;
  background: url("../assets/display-back-image.jpg");
  background-size: 100% 100%;
}
.from-area {
  color: #fff;
  width: 90%;
  height: 100%;
  margin: 5% 0 0 5%;
  background: rgba(238, 238, 238, 0.8);
  box-shadow: 5px 0 15px #000, 1px 0 2px #000 inset;
}
.upload-area {
  min-height: 770px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-form-item {
  color: #fff;
  padding-top: 10px;
  margin: 0 30px 20px 0;
}
</style>
