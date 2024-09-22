<template>

  <div  class="header" >
    <div class="logo"><routerLink to="/" style="text-decoration: none;  color: white;"> Speed</routerLink></div>
  </div>

  <el-container class="layout-container-demo" style="height: 100%">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']">
          <el-sub-menu index="1" class="el-sub-menu">
            <template #title>
              <div  style="color: rgba(4,4,4,0.97)">
                我是买家
              </div>
            </template>
            <el-menu-item-group class="el-sub-menu">
              <el-menu-item index="1-1" style="color: rgba(4,4,4,0.97)">我购买的商品</el-menu-item>
              <el-menu-item index="1-2" style="color: rgba(4,4,4,0.97)">我的商品收藏</el-menu-item>
              <el-menu-item index="1-3" style="color: rgba(4,4,4,0.97)">我的黑名单</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <div  style="color: rgba(4,4,4,0.97)">
                我是卖家
              </div>
            </template>
            <el-menu-item-group class="el-sub-menu">
              <el-menu-item index="2-1" style="color: rgba(4,4,4,0.97)">我卖出的订单</el-menu-item>
              <el-menu-item index="2-2" style="color: rgba(4,4,4,0.97)">我的商品管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 32px;color: rgba(4,4,4,0.97)">
        <div class="toolbar">
          <span>fananan</span>
        </div>
      </el-header>

      <el-main class="el-main">
        <el-scrollbar>

        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: rgba(0, 0, 0, 0.83);
  background-color: rgba(0, 0, 0, 0.83);
}
.layout-container-demo .el-aside {
  background-color: rgba(0, 0, 0, 0.83);
  background-color: rgba(0, 0, 0, 0.83);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  right: 20px;
}

.header{
  width: 100%;
  display: flex;
  justify-content: left;
  padding-left: 60px;
  height: 58px;
  background-color: rgba(0, 0, 0, 0.96);
}
.logo{
  width: 46%;
  font-size: 42px;
}

.el-sub-menu{
  background-color: rgba(0, 0, 0, 0.83);
  color: rgba(4,4,4,0.97);
}
.el-main{
  background-color: rgba(0, 0, 0, 0.78);
}

</style>
