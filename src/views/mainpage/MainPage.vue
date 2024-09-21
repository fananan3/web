<script setup lang="ts">

import { useRouter  } from 'vue-router';
import { ref} from 'vue';

const router = useRouter();

function enterLeft(){
  router.push({name:'login'})
}

// 组件加载时监听
// componentDidMount()
// {
//   window.addEventListener("scroll", this.scrollHandle,true);
// }


// 组件卸载时移除监听
// componentWillUnmount()
// {
//   console.log(1);//控制台看是否被触发
//   window.removeEventListener("scroll", this.scrollHandle);
// }
//
// // 监听调用的方法
// scrollHandle=()=>{
//   console.log('监听滚动');
//   this.currentScroll = window.pageYOffset //表示当前滚动的位置
//
//   if (this.currentScroll >= this.$refs.testref.offsetTop) { //当前滚动位置到达testref的时候，显示div（100作为调整用）
//     this.testShow = true;
//   }
//   if (this.currentScroll >= this.$refs.test2ref.offsetTop - 100) {
//     this.testShow2 = true;
//   }
//   if (this.currentScroll >= this.$refs.test3ref.offsetTop - 100) {
//     this.testShow3 = true;
//     setTimeout(() => {
//       this.testShow3 = false;
//     }, 400);
//   }
//
// }

// 导航栏
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

  <div class="main"  >
     <!--导航栏-->
    <header  :class="{'header': true,'active': isActive,}" >
      <div class="logo"><routerLink to="/home" style="text-decoration: none;  color: white;"> Speed</routerLink></div>
      <nav class="nav">
        <ul class="menu">
          <li class="yy"><span class="yy-logo"></span> <span >个人中心</span></li>
          <li class="yy"><span class="yy-logo"></span> <span >卖家中心</span></li>
          <li class="yy" ><span class="yy-logo"></span> <span >买家中心</span></li>
          <li class="yy" onclick="tologin"><span class="yy-logo"></span> <span >登录</span></li>
        </ul>
      </nav>
    </header>

    <div class="body" >

      <div >
        <transition
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__fadeInBottomRight">
          <h2  class="body-text">NOTHING IS TRUE EVERYTHING IS</h2>
        </transition>

        <transition
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__fadeInBottomRight">
          <h2  class="body-text"> PERMITTED. BETTER TO RUN THAN</h2>

        </transition>

        <transition
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__fadeInBottomLeft">
          <h2 class="body-text">CURSE THE ROAD.YOU ARE NOT</h2>

        </transition>

        <transition
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__fadeInBottomRight">
          <h2 class="body-text">PREPARED!.YOU CANT KILL ME!</h2>

        </transition>

      </div>
      
      <div class="body-show">

        <el-carousel :interval="4000" type="card" height="400px" motion-blur:motion-blur>
          <el-carousel-item >
            <img src="../../assets/yongjie1.jpg"/>
          </el-carousel-item>
          <el-carousel-item>
            <img src="../../assets/yongjie2.jpg"/>
          </el-carousel-item>
          <el-carousel-item>
            <img src="../../assets/yongjie3.jpg"/>

          </el-carousel-item>
        </el-carousel>

        <div  class="show-yongjie">
          <h2>《永劫无间》游戏讲述了以虚构的幻想世界为背景，阴阳二神互相杀伐，导致世界处于永劫之中。玩家需扮演一名英雄，在地图中收集各种资源，与其他玩家对抗，生存到最后。</h2>
        </div>

      </div>

      <div class="body-show2">
        <div class="show2-item">
          <h2 class="show2-text">
            绝地求生中，每一局游戏有100名玩家参与，玩家空投跳伞至孤岛的各个角落，
            赤手空拳寻找武器，车辆以及物资，并在多种多样的地形中展开战斗。
            随着时间的流逝，安全区会不断变化，充满各种随机性要素，因此想要取得胜利，
            策略与枪法同样重要。
          </h2>

        </div>
        <div class="show2-item">
        <img style="width: 100%;height: 100%" src="../../assets/juedi1.jpg" />
        </div>
        </div>


      <div class="bottom">
        <div class="bottom-item">
          <h1 class="bottom-text" @click="enterLeft">
            我是买家
          </h1>
        </div>

        <div class="bottom-item">
          <h1 class="bottom-text">
            我是卖家
          </h1>
        </div>

      </div>


    </div>


  </div>
</template>

<style scoped>
.main{
  width: 100%;
  overflow: auto;
  height: 2000px;
  background-color: #0a0a0b;
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
  background-color: rgba(0, 0, 0, 0.83);
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
  height: 400px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 50px;
}

.body-text{
  font-size: 80px;
  color: white;
}

@keyframes scaleUp {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}

.body-show{
  width: 95%;
  margin-left: 30px;
}

.body-show2{
  margin-top: 70px;
  width: 95%;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;

}
.show2-item{
  width: 50%;
  height: 100%;
}

.show-yongjie{
  font-size: 15px;
  color: white;
  width: 70%;
  margin-left: 15%
}
.show-yongjie:hover{
  color: rgb(241, 89, 89);
  transition: color 0.5s ease;
  /* ... 其他样式 ... */
  animation: scaleUp 0.5s ease-in-out infinite alternate;
}

.show2-text{
  font-size: 20px;
  color: white;
  margin-top: 20%;
  text-align: center;
}

.show2-text:hover{
  color: rgb(241, 89, 89);
  transition: color 0.5s ease;
  /* ... 其他样式 ... */
  animation: scaleUp 0.5s ease-in-out infinite alternate;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.bottom{
  width: 95%;
  margin-top: 70px;
  height: 200px;
  margin-left: 30px;
  display: flex;
  justify-content: space-around;
}
.bottom-item{
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.bottom-text{
  color: white;
}
.bottom-text:hover{
  color: rgb(241, 89, 89);
  transition: color 0.5s ease;
}


</style>
