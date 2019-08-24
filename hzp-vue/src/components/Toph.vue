<template>
    <div>
       <header id="header">
        <!-- 顶部 -->
        <div class="box">
            <!-- 上部 -->
            <!-- <div class="bg">
            <div class="top">
            <div class="top lt font_small">
                <ul >
                    <li><a href="#">欢迎来到化妆品店</a></li>
                    <li><a href="login.html">请登录</a></li>
                    <li><a href="#">免费注册</a></li>
                    <li><a href="#">常见问题</a></li>
                </ul>
            </div>
            <span></span>
            <div class="top rt font_small">
                <ul>
                    <li><a href="#">帮助中心</a></li>
                    <li>
                        <span class=img1><img src="img/header/mobile-sephora.png" alt=""></span>
                        <a href="#">手机收藏</a>
                    </li>
                    <li>
                        <span class="img1"><img src="img/header/vip-club.png" alt=""></span>
                        <a href="#">会员俱乐部</a>
                    </li>
                    <li>
                        <span class="img1"><img src="img/header/my-sephora.png" alt=""></span>
                        <a class="mr-0" href="#">我的购物车</a>
                        <div class="tubiao"></div>
                    </li>
                </ul>
            </div>
        </div>
        </div> -->

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
                    <img :src="url+'img/header/shopping_bag.png'" alt="">
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
                    <div class=nav-r><img :src="url+'img/header/navigation_shopping.png'" alt=""></div>
                </div>

            </div>
        </div>
    </header> 
    </div>
</template>
<script>
export default {
     data(){
        return {
            url:"http://127.0.0.1:5050/"
        }
    },
}
</script>
<style scoped>
    a{
    text-decoration:none;
    color:#fff;
}
.bg{
    background-color:#000;
}
/*搜索部分*/
/*logo*/
#header div.search{
    width:1190px;
    height:4.5rem;
    margin:0 auto;
    margin-top:2rem;
    box-sizing: border-box;
}
#header div.logo{
    font-size:2.5rem;
    font-weight: blod;
    padding-right: 3rem;
    text-shadow: 2px 2px #999;
    font-style:italic;
}
#header div.logo span{
    text-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
/*左浮动*/
#header div.search-text li{
    float:left;
}
/*搜索框*/
#header div.search-text input{
    width:540px;
    height:34px;
    padding-left:20px;
    position:relative;
    
}
#header div.search-text button{
    width:4rem;
    height:34px;
    background:#000;
    border:0px;
    position:absolute;
    
    
}
#header div.search-text li a{
    font-size:12px;
    color:#b9b5b5;
    margin-right:2rem;
}
/*右侧购物袋*/
#header div.search div.fl-rt{
    height:42px;
    margin-right:2.5rem;
    margin-top:-2.5rem;
    border:1px solid #e8e8e8;
    padding:0.5rem 2rem;  
}
#header div.search>div.fl-rt img{
    vertical-align: middle;
}
/*导航图片*/
div.box div.nav{
    width:100%;
}
div.box div.nav-v{
    width:1190px;
    margin:0 auto;
}
div.box div.nav div.nav-t{
    float: left;
    width: 240px;
    height: 36px;
    line-height: 36px;
    background:url("http://127.0.0.1:5050/img/header/classified.png");
}
div.box div.nav div.nav-t a{
    margin-left:20px;
}
/*导航*/
div.box div.nav div.nav-m ul li{
    float:left;
    margin-left:3rem;
    line-height:36px;
}
div.box div.nav div.nav-m ul li a{
    color:#000;
}
div.box div.nav-r img{
    margin-left:19rem;
}

</style>