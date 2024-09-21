<template>
  <div class="atomic">
    <el-form class="loginform" :rules="rules" :model="loginModel" ref="form" :inline="false" size="large">
      <el-form-item>
        <div class="logintitle">Login</div>
      </el-form-item>
      <el-form-item prop="username">
        <div class="loginhead">账号</div>
        <el-input style="height: 38px;" placeholder="请输入用户名" v-model="loginModel.username" ></el-input>
      </el-form-item>
      <el-form-item style="margin-top:-15px ;" prop="password">
        <div class="loginhead">密码</div>
        <el-input  show-password type="password" style="height: 38px;" placeholder="请输入登录密码"  v-model="loginModel.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="border: 0;" @click="enterLeft" >立即注册</el-button>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 350px;" type="primary" size="large" @click="commit">登录</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>


<script setup lang="ts">
import { FormInstance } from 'element-plus';
import {useRouter} from 'vue-router';
import { reactive,ref } from 'vue';

const router = useRouter();

//跳转
function enterLeft(){
  router.push({name:'register'})
}

//表单的ref属性
const form = ref<FormInstance>();

//表单绑定的对象
const loginModel = reactive({
  username:'',
  password:'',
});


//表单验证规则
const rules = reactive({
  username:[{required:true,message:'请填写账号', trigger:'change'}],
  password:[{required:true,message:'请填写密码', trigger:'change'}],
});

//登录提交
const commit = () =>{
  form.value?.validate((valid) => {
    if(valid) {
      let res = loginModel;
      alert('登录成功');
      console.log(res);
      router.push({ path: '/'});
    }else{
      console.log('error submit!');
      return;
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
    margin-left:55% ;

    .logintitle {
      display: flex;
      justify-content: center;
      color: #0d0d0e;
      width: 100%;
      font-size: 24px;
      font-weight: 600;
    }

    .loginhead{
      font-size:13px ;
      color: #807c7cea;
    }


  }
}
</style>