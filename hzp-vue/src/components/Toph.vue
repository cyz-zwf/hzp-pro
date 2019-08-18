<template>
  <header id="header">
        <!-- 顶部 -->
        <div class="box">
            <!-- 搜索 -->
            <div class="search">
                <div class="logo lt"><span>C y z & Z h u</span></div>
                <div class="search-text">
                    <input class="font_small" type="text" placeholder="夏日防晒"><button><a href="#">搜索</a></button>

                    <ul class=" bottom">
                        <li><a href="#">夏季热搜好</a></li>
                        <li><a href="#">物畅销面膜囤货</a></li>
                        <li><a href="#">大热红唇</a></li>
                        <li><a href="#">口碑防晒精选</a></li>
                        <li><a href="#">花漾甜心香</a></li>
                        <li><a href="#">仪器臻选</a></li>
                    </ul>
                </div>
                <div class="fl-rt rt">
                    <img :src="url+'/img/header/shopping_bag.png'" alt="">
                    <span>购物袋 <span>0</span>件</span>
                </div>
            </div>
            <!-- 导航-->
            <div class="nav">
                <div class="nav-v">
                    <div class="nav-t"><a href="#">全部商品类目</a></div>
                    <div class="nav-m ">
                        <ul>
                            <li><a href="#">畅销榜单</a></li>
                            <li><a href="#">独家发售</a></li>
                            <li><a href="#">全部品牌</a></li>
                            <li><a href="#">预约中心</a></li>
                        </ul>
                    </div>
                    <div class=nav-r><img :src="url + '/img/header/navigation_shopping.png'" alt=""></div>
                </div>

            </div>
        </div>
    </header>
</template>
<script>
export default {
  methods:{
  
  },
  data(){
    return{
      url: 'http://127.0.0.1:5050'
    }
  }
};
</script>
<style  scoped>
@import url("../assets/css/comm.css");
@import url("../assets/css/toph.css");
</style>