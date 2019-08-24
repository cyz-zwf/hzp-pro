<template>
  <div class="bg">
    <div class="top">
      <div class="top lt font_small">
        <ul>
          <li>
            <a href="#">欢迎来到化妆品店</a>
          </li>
          <li>
            <router-link to="/Login">请登录</router-link>
            <!-- <a href="login.html">请登录</a> -->
          </li>
          <li>
            <router-link to="/Reg">免费注册</router-link>
            <!-- <a href="#">免费注册</a> -->
          </li>
          <li>
            <a href="#">常见问题</a>
          </li>
        </ul>
      </div>
      <span></span>
      <div class="top rt font_small">
        <ul>
          <li>
            <a href="#">帮助中心</a>
          </li>
          <li>
            <span class="img1">
              <img src="http://127.0.0.1:5050/img/header/mobile-sephora.png" alt />
            </span>
            <a href="#">手机收藏</a>
          </li>
          <li>
            <span class="img1">
              <img src="http://127.0.0.1:5050/img/header/vip-club.png" alt />
            </span>
            <a href="#">会员俱乐部</a>
          </li>
          <li>
            <span class="img1">
              <img src="http://127.0.0.1:5050/img/header/my-sephora.png" alt />
            </span>
            <router-link class="mr-0"  to="/Shopping">我的购物车</router-link>
            <!-- <a class="mr-0" href="#">我的购物车</a> -->
            <div class="tubiao"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    @import url("../assets/css/comm.css");
    @import url("../assets/css/top.css");
</style>