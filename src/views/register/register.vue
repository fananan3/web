<template>
  <div class="atomic">
    <el-form class="loginform" :rules="rules" :model="loginModel" ref="ruleFormRef" :inline="false" size="large">
      <el-form-item>
        <div class="logintitle">账号注册</div>
      </el-form-item>
      <el-form-item prop="username">
        <div class="loginhead">账号</div>
        <el-input style="height: 38px;" placeholder="请填写账号" v-model="loginModel.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item style="margin-top:-10px ;" prop="password">
        <div class="loginhead">密码</div>
        <el-input show-password type="password" style="height: 38px;" placeholder="请填写注册密码"
                  v-model="loginModel.password"></el-input>
      </el-form-item>
      <el-form-item style="margin-top:-10px ;" prop="passwordCheck">
        <div class="loginhead">确认密码</div>
        <el-input show-password type="password" style="height: 38px;" placeholder="请填写确认密码"
                  v-model="loginModel.passwordCheck"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 350px;margin-top: 10px;" type="primary" size="large"
                   @click="commit(ruleFormRef)">立即注册</el-button>
      </el-form-item>
      <el-form-item style="margin-top:-20px;">
        <p>已有账号？<a href="login">立即登录</a></p>
      </el-form-item>
    </el-form>
  </div>
</template>


<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus';
// import {useRouter} from 'vue-router';
import { reactive, ref } from 'vue';

const ruleFormRef = ref<FormInstance>();

// const router = useRouter();

interface RuleForm{
  username: string
  password: string
  passwordCheck:string
}


//表单绑定的对象0
const loginModel = reactive<RuleForm>({
  username: '',
  password: '',
  passwordCheck: ''
});


//表单验证规则
const rules = reactive<FormRules<RuleForm>>({
  username: [{ required: true, message: '请填写账号', trigger: 'blur' }],
  password: [{
    required: true, trigger: 'blur',
    validator: (_rule: any, value: string, callback: any) => {
      if (!value) {
        callback(new Error('请填写密码'));
      } else {
        // 验证密码长度等（如果不在 rules 中直接指定）
        if (value.length < 6 || value.length > 16) {
          callback(new Error('密码长度在6到16个字符'));
        } else {
          callback();
        }
      }
    }, min: 6, max: 16, message: '密码长度在6到16个字符',
  }],
  passwordCheck: [{
    required: true, message: '请输入确认密码', trigger: 'blur',
    validator: (_rule: any, value: string, callback: any) => {
      if (value === '') {
        callback(new Error('密码不相等'));
      } else if (value !== loginModel.password) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    },
  }],
});



const commit = async (formE1: FormInstance | undefined) => {
  if (!formE1) return
  await formE1.validate((valid) => {
    if (valid) {
      console.log(loginModel)
      console.log("123")
    } else {
      console.log('error submit!')
    }
  })
}







</script>

<style lang="scss" scoped>
.logincontainer {
  background-color: #fff;
  display: flex;

  .locontainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;

    .image-link {
      margin-left: 20px;
    }

    .append {
      background-color: rgb(255, 255, 255);
      margin-top: 25px;
      margin-left: 45%;

      .el-button {
        border: 0;
        font-size: 20px;
        color: rgb(0, 0, 0);
      }

      .el-button:hover {
        color: rgb(0, 190, 253);
      }

    }
  }


}

//背景
.atomic {
  height: 100%;
  display: flex;
  background-image: url(https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366_1280.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  justify-content: center;
  align-items: center;

  //表单
  .loginform {
    height: 440px;
    width: 320px;
    padding: 20px 35px;
    border-radius: 10px;
    background-color: #fff;


    .logintitle {
      display: flex;
      justify-content: center;
      color: #0d0d0e;
      width: 100%;
      font-size: 24px;
      font-weight: 600;
    }

    .loginhead {
      font-size: 13px;
      color: #807c7cea;
    }


  }
}
</style>