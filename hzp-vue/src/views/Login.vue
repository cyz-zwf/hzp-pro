<template>
    <div class="login" id="login">
        <div class="logo">C y z & Z h u</div>
        <!-- 登录 -->
        <div class="bodbg">
            <div class="lo_box">
                <div class="dl">登 录 c y z 官 网</div>
                <div class="tex">
                    <input type="text" placeholder="手机号/邮箱">
                    <span class="suo1"></span>
                </div>
                <div>
                    <input type="password" placeholder="密码">
                    <span class="suo"></span>
                </div>

                <div class="pwd font_small">忘记密码?</div>
                <button class="btn_dl">登 录</button>
                <div class="chb">
                    <input type="checkbox" checked>
                    <p>已阅读</p>
                    <p>《cyz用户服务协议》</p>
                    <p>和</p>
                    <p>《cyz隐私政策》</p>
                </div>
                <div class="image">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="zc">
                    <p>还没有账号?<span>免费注册</span></p>
                </div>
            </div>
        </div>
        <!-- <div class="bottom-b">
            <div class="bottom-b-m">
                <ul>
                    <li class=p-t>
                        <img src="img/footer/footer-redords-icon.png" alt="">
                        <a href="#">沪公网安备 31010602003121号</a>
                        <a href="#">ICP备案序号:沪ICP备05026645号</a>
                        <a href="#">食品经营许可证</a>
                        <a href="#">网站使用条款</a>
                        <a href="#">严正声明</a>
                    </li>
                    <li>
                        <span>本网站隶属于cyz（广州）化妆品销售有限公司</span>
                        <a href="#">（企业法人营业执照）</a>
                    </li>
                </ul>
            </div>
        </div> -->
        <!-- 脚部 -->
        <bottom></bottom>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.login{
    width:100%;
    height:920px;
    
}
/* logo */
.logo{
    width:1190px;
    height:89px;
    margin:0 auto;
    font-size:39px;
    line-height:89px;
    text-shadow: 2px 2px #999;
    font-style:italic;
}
/* 登录 */
.bodbg{
    min-width: 1190px;
    width: 100%;
    height:610px;
    background: transparent no-repeat scroll 50% 0;
    background-image:url("http://127.0.0.1:5050/img/login/hp_loginlage_20190620.jpg");
    position : relative;
    
}
/* 登录盒子 */
.lo_box{
    width:360px;
    height:380px;
    background-color:#fff;
    position:absolute;
    right:20%;
    top:115px;
    padding:0px 30px;
}
/* 登录官网 */
.lo_box div.dl{
    margin-top:30px;
    margin-bottom:34px;
}
/* 手机和密码文本框 */
.lo_box input{
    width:298px;
    height:30px;
    padding-left:25px;
}
.lo_box input:hover{
    border:0;
    border:1px solid #919191;
    border-bottom:1px solid #444;
}
div.lo_box :nth-child(2){
    position:relative;
}
span.suo1{
    display:block;
    width:20px;
    height:19px;
    background:url("http://127.0.0.1:5050/img/login/LoginIn-icon.png") no-repeat;
    background-position :0px -20px;
    top:-26px;
    left:2px;
}
span.suo{
    display:block;
    width:20px;
    height:30px;
    background:url("http://127.0.0.1:5050/img/login/LoginIn-icon.png") no-repeat;
    background-position :0px 10px;
    top:-35px;
    left:2px;
}
/* 忘记密码 */
.lo_box div.pwd{
    color:#666;
    margin-bottom:20px;
    margin-top:-13px;
}
.lo_box div.pwd:hover{
    color:#e00;
    cursor: pointer;
}
/* 登录按钮 */
.lo_box button.btn_dl{
    width:300px;
    height:40px;
    background-color:#999;
    color:#fff;
    border:0;
    font-size:18px;
}
/* 多选按钮 */
div.chb{
    margin-top:6px;
}
/* 清除父元素的高度坍塌 */
div.chb::after{
    content:"";
    display:block;
    clear:both;
}
div.chb :first-child{
    width:16px;
    height:16px;
    float:left;
}
div.chb p{
    float:left;
    font-size:12px;
    color:#919191;
}
div.chb :nth-child(3){
    color:#000;
    cursor:pointer;
}
div.chb :last-child {
    color:#000;
    cursor:pointer;
}
/* 其他登录小图标 */
div.image ul>li{
    float:left;
    margin-left:10px;
    margin-top:20px;
}
/* 微信小图标 */
div.image ul>li:first-child{
    width:24px;
    height:24px;
    background:url("http://127.0.0.1:5050/img/login/LoginIn-icon.png");
    background-position :48px 0px;
}
div.image ul>li:first-child:hover{
    background-position :128px 0px;
    cursor:pointer;
} 
/* 新浪小图标 */
div.image ul>li:nth-child(2){
    width:24px;
    height:24px;
    background:url("http://127.0.0.1:5050/img/login/LoginIn-icon.png");
    background-position :48px 24px;
}
div.image ul>li:nth-child(2):hover{
    background-position :128px 24px;
    cursor:pointer;
}
/* qq小图标 */
div.image ul>li:last-child{
    width:24px;
    height:24px;
    background:url("http://127.0.0.1:5050/img/login/LoginIn-icon.png");
    background-position :48px 48px;
}
div.image ul>li:last-child:hover{
    background-position :128px 48px;
    cursor:pointer;
}
div.zc{
   float:right;
   font-size:12px;
   margin-top:20px;
}
/* 免费注册 */
div.zc span{
    color:#e00;
    margin-left:5px;
    cursor: pointer;
}
/*底部*/
#login div.bottom-b{
    background:#000;
    width:100%;
    height:5rem;
}
#login div.bottom-b-m{
    width:1190px;
    margin:0 auto;
    text-align:center;
}
#login div.bottom-b-m ul li.p-t{
    padding-top: 1.5rem;
}
#login div.bottom-b-m ul li a ,.bottom-b-m ul li span{
    color:#a59d9d;
    font-size:12px;
    margin-right:8px;
}
#login div.bottom-b-m ul li img{
    vertical-align: middle;
}


</style>>
    