<script setup lang="ts">
// 导航栏
import {ref} from "vue";

let isActive = ref(false)
let lastScrollPosition = ref(window.pageYOffset)
; (() => {
  window.addEventListener('scroll', () => {
    const pageY = window.pageYOffset
    // 滚动条距离顶部的长度
    if (lastScrollPosition.value > pageY) {
      isActive.value = false
    } else {
      isActive.value = true
    }
    lastScrollPosition.value = pageY
  })

})()
</script>

<template>
  <div class="main">
    <header  :class="{'header': true,'active': isActive,}" >
      <div class="logo"><routerLink to="/" style="text-decoration: none;  color: white;"> Speed</routerLink></div>
      <nav class="nav">
        <ul class="menu">
          <li class="yy"><span class="yy-logo"></span> <span >卖家中心</span></li>
          <li class="yy" ><span class="yy-logo"></span> <span >买家中心</span></li>
          <li class="yy"><span class="yy-logo"></span> <span @click="enteruser">个人中心</span></li>
        </ul>
      </nav>
    </header>

    <div class="body">
      <div class="body-main">

      </div>
    </div>

  </div>

</template>

<style scoped>
.main{
  width: 100%;
  height:100%;
  background-color: rgba(0, 0, 0, 0.83);
  padding-top: 10%;
}


Header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.5s ease-in-out;
  height: 3.5rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.72);
  z-index: 10;
}

.header.active {
  top: -100px;
}

.logo{
  width: 46%;
  font-size: 42px;
}

.nav{
  width: 46%;
}
.menu{
  display: flex;
  justify-content: right;
  color: white;
}
.yy{
  margin-left: 30px;
}

.body{

  width: 100%;
  height: 100%;
  padding-left: 10%;
  padding-right: 10%;

}

.body-main{
  width: 80%;
  height: 85%;
  background-color: rgba(255, 255, 255, 0.89);
  border-radius: 10px;
}
.body-main:hover{
  box-shadow: 1px 1px 15px 5px rgba(90, 90, 93, 0.66);
  transition: box-shadow 0.3s ease;
  /* ... 其他样式 ... */
  animation: scaleUp 0.5s ease-in-out infinite alternate;
}

</style>