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
<style >
    @import url("../assets/css/reg.css");
</style>