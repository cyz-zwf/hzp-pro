<template>
    <div class="reg_box">
        <div class="logo">C y z & Z h u</div>
        <!-- 注册 -->
        <div class="bg">
            <div class="reg">
                <div class="reg_title">欢迎注册 c y z <span>已有账号登录--></span></div>
                <ul class="reg_mb">
                    <li class="margin">
                        手机号
                        <input type="text" placeholder="请输入手机号">
                        <div class="voli">获取验证码</div>
                    </li>
                    <li class="right">
                        短信验证码
                        <input type="text">
                    </li>
                    <li>
                        输入密码
                        <input type="password">
                    </li>
                    <li>确认密码
                        <input type="password">
                    </li>
                    <li class="btn">
                        同意条款并注册
                    </li>
                    <li class="cheb">
                        <input type="checkbox" checked>
                        <div class="check">已阅读</div>
                        <div class="fuwu">&lt;&lt;cyz用户服务协议和政策&gt;&gt;</div>
                    </li>
                </ul>
            </div>
        </div>
       <!-- 底部 -->
       <bottom></bottom>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.reg_box{
    width:100%;
    margin:0 auto;
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
.reg_box div.bg{
    width:100%;
    height:500px;
    background:url("http://127.0.0.1:5050/img/login/hp_loginlage_20190718.jpg")
}
/* 注册 */
.reg{
    width:450px;
    height:380px;
    background-color:#fff;
    position:absolute;
    right:20%;
    top:158px;
    padding:0px 30px;
}
.reg_title{
    margin-top:30px;
    margin-bottom:34px;
    font-size:16px;
    font-weight: bold;
}
/* 已有账号登录 */
.reg_title span{
    position: absolute;
    top:30px;
    right:31px;
    font-size:14px;
    color:#f00;
    cursor:pointer;
}
.reg_mb li{
    margin-bottom:20px;
}
.reg_mb li :first-child{
    margin-left:37px;
}
.reg_mb li.margin :first-child{
    margin-left:53px;
}
.reg_mb li.right :first-child{
    margin-left:21px;
}
.reg_mb li.btn{
    text-align: center;
    line-height: 30px;
    background-color:#999;
    color:#fff;
    font-size: 14px;
    margin-left:105px;
}
input,.reg_mb li.btn{
    width:200px;
    height:30px;
    cursor:pointer;
}
.reg_mb li.cheb :first-child{
    width:15px;
    position: absolute;
    bottom :36px;
    left:97px;
}
.cheb{
    font-size: 12px;
    color:#999;
    
}
.check{
    position :absolute;
    bottom: 44px;
    left: 149px;
}
.cheb div.fuwu{
    position :absolute;
    bottom: 45px;
    left: 187px;
    color:#000;
    cursor:pointer;
}

.voli{
    text-align: center;
    width:90px;
    position:absolute;
    top:86px;
    right:18px;
    background-color:#ccc;
    padding:4px;
    font-size:14px;
    color:#fff;
}

</style>