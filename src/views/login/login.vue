<template>
  <div class="atomic">
    <el-form class="box" :model="loginModel" ref="form">
      <h2>Login</h2>
      <div class="input-box">
        <label>账号</label>
        <input type="text">
      </div>
      <div class="input-box">
        <label>密码</label>
        <input type="password">
      </div>
      <div class="btn-box">
        <a href="javascript:void(0)">忘记密码?</a>
        <div>
          <button @click="mainpage">登录</button>
          <button @click="register">注册</button>
        </div>
      </div>
    </el-form>
  </div>
</template>


<script setup lang="ts">
import { FormInstance } from 'element-plus';
import {useRouter} from 'vue-router';
import { reactive,ref } from 'vue';

const router = useRouter();

//跳转

function  mainpage(){
  router.push({name:'main'})
}

function  register(){

  router.push({name:'register'})
}

//表单的ref属性
const form = ref<FormInstance>();

//表单绑定的对象
const loginModel = reactive({
    username:"",
    password:"",
});


</script>

<style lang="scss" scoped>

.atomic {
  height: 100%;
  display: flex;
  background-image: url(https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366_1280.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  justify-content: center;
  align-items: center;

  .box {
    width: 350px;
    height: 350px;

    backdrop-filter: blur(1px);
    background: rgba(50, 50, 50, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
        }
  .box:hover{
    border-top: 1px solid rgba(74, 70, 70, 0.4);
    border-left: 1px solid rgba(74, 70, 70, 0.4);
    border-bottom: 1px solid rgba(74, 70, 70, 0.4);
    border-right: 1px solid rgba(74, 70, 70, 0.4);
  }
  .box > h2 {
    color: rgba(255,255,255,0.9);
    margin-bottom: 30px;
  }

  .box .input-box {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-bottom: 10px;
  }

  .box .input-box label {
    font-size: 13px;
    color: rgba(255,255,255,0.9);
    margin-bottom: 5px;
  }

  .box .input-box input {
    letter-spacing: 1px;
    font-size: 14px;
    box-sizing: border-box;
    width: 250px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid rgba(255,255,255,0.3);
    background: rgba(50, 50, 50, 0.3);
    outline: none;
    padding: 0 12px;
    color: rgba(255,255,255,0.9);
    transition: 0.2s;
  }

  /* 输入框聚焦效果 */
  .box .input-box input:focus {
    border: 1px solid rgba(255,255,255,0.8);
  }

  .box .btn-box {
    width: 250px;
    display: flex;
    flex-direction: column;
  }

  .box .btn-box > a {
    outline: none;
    display: block;
    width: 250px;
    text-align: end;
    text-decoration: none;
    font-size: 13px;
    color: rgba(255,255,255,0.8);
  }

  .box .btn-box > a:hover {
    color: rgba(255,255,255,1);
  }

  .box .btn-box > div {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box .btn-box > div > button {
    outline: none;
    margin-top: 10px;
    display: block;
    font-size: 14px;
    border-radius: 5px;
    transition: 0.2s;
  }

  .box .btn-box > div > button:nth-of-type(1) {
    width: 120px;
    height: 35px;
    color: rgba(255,255,255,0.9);
    border: 1px solid rgba(00, 96, 96, 0.7);
    background: rgba(00, 96, 96, 0.5);
  }

  .box .btn-box > div > button:nth-of-type(2) {
    width: 120px;
    height: 35px;
    margin-left: 10px;
    color: rgba(255,255,255,0.9);
    border: 1px solid rgba(00, 96, 96, 0.7);
    background: rgba(00, 96, 96, 0.5);
  }

  .box .btn-box > div > button:hover {
    border: 1px solid rgba(00, 96, 96);
    background: rgba(00, 96, 96);
  }
}
</style>