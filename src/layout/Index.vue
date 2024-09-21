<template>
    <el-container class="mycontainer">
        <el-aside width="230px" class="aside">Aside</el-aside>
        <el-container>
            <el-header class="header">
                <el-button @click="goToLogin" >登录</el-button>
            </el-header>
            <el-main class="mymain">Main</el-main>
        </el-container>
    </el-container>
    
</template>

<script setup lang="ts">
import { useRouter} from 'vue-router';
const router = useRouter();

function goToLogin() {
    router.push({ name: 'login'});
}

</script>

<style scoped lang="scss">
.mycontainer{
    height: 100%;
    .aside{
        background-color: burlywood;
    }
    .header{
        background-color: blueviolet;

         .el-button{
        border: 0;
        color: rgb(29, 188, 241);
        background-color:blueviolet ;
        margin: 12px;
        margin-left: 300px;
      }
      .el-button:hover{
        color: #ffaa00;
      }

    }
    
    .mymain{
        background-color: seagreen;
    }
}
</style>