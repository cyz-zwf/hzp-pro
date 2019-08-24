<template>
    <div>
        <top></top>
        <!-- 脚部 -->
         <!-- 购物 -->
    <div id="shp_box">
        <div id="shp">
            <div class="lo">C y z & Z h u</div>
            <!-- 购物车流程 -->
            <div class="shp_lc">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
    <!-- 购物筐-->
    <div class="shpbox_bg">
        <!-- 消息提示 -->
        <div class="mag">
            <div>您的购物车清单如含近效期产品，该近效期产品不支持7天无理由退货，近效期产品为页面有特别标示有效期信息的产品。</div>
        </div>
        <!-- 购物清单 -->
        <div class="shp_list">
            <div class="shp_title">
                <ul>
                    <li><input type="checkbox"> 全选</li>
                    <li>商品信息</li>
                    <li>单价(元)</li>
                    <li>数量</li>
                    <li>小计(元)</li>
                    <li>操作</li>
                </ul>
                <!-- 购物车商品1 -->
                <div class="shp_sp">
                    <div class="lt chb"><input type="checkbox"></div>
                    <div class="tp lt img"><a href=""><img :src="url+'img/shp/1_n_07468_150x150.jpg'" alt=""></a></div>
                    <!-- 商品信息 -->
                    <div class="sp_msg lt ">
                        <h5>LANCOME</h5>
                        <div class="detail">兰蔻菁纯臻颜滋润眼霜奢宠礼盒</div>
                        <div class="gug">规格 : 套装</div>
                    </div>
                    <!-- 单价 -->
                    <div class="lt price">1088</div>
                    <!-- 数量 -->
                    <div class="lt counts">
                        <div class="btn1">-</div>
                        <div class="num">1</div>
                        <div class="btn2">+</div>
                    </div>
                    <!-- 小计 -->
                    <div class="lt sum">1088</div>
                    <!-- 操作 -->
                    <div class="lt oper ">
                        <span></span>
                    </div>
                </div>
                <!-- 购物车商品2 -->
                <div class="shp_sp">
                    <div class="lt chb"><input type="checkbox"></div>
                    <div class="tp lt img"><a href=""><img :src="url+'img/shp/1_n_07468_150x150.jpg'" alt=""></a></div>
                    <!-- 商品信息 -->
                    <div class="sp_msg lt ">
                        <h5>LANCOME</h5>
                        <div class="detail">兰蔻菁纯臻颜滋润眼霜奢宠礼盒</div>
                        <div class="gug">规格 : 套装</div>
                    </div>
                    <!-- 单价 -->
                    <div class="lt price">1088</div>
                    <!-- 数量 -->
                    <div class="lt counts">
                        <div class="btn1">-</div>
                        <div class="num">1</div>
                        <div class="btn2">+</div>
                    </div>
                    <!-- 小计 -->
                    <div class="lt sum">1088</div>
                    <!-- 操作 -->
                    <div class="lt oper ">
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 优惠卷 -->
        <div class="coupon">
            <div class="coupon_title">
                <div class="lt">
                    <h3>优惠卷 <span class="gay">*了解优惠券</span> <span class="red">使用规则</span></h3>
                </div>
                <div class="coupon_r rt">+输入优惠码</div>
            </div>
            <div class="jun">
                <div class="none">
                    <div class="text">您目前没有优惠券</div>
                </div>
            </div>
        </div>
        <!-- 结算 -->
        <div class="total">
            <div class="total_lt">
                <ul>
                    <li>
                        <input type="checkbox" checked>
                    </li>
                    <li>全选</li>
                    <li>批量删除</li>
                    <li>|</li>
                    <li>
                        <div class="call">联系客服
                            <div class="pho"></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="total_rt">
                <div class="rt_lt">
                    <div>已选 <span>3</span> 件商品, &nbsp;&nbsp;合计 : <span>¥2208.00</span>
                    </div>
                    <div>商品总额 : <span>¥2208.00</span> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<span class="icon"></span>
                        共节省:<span> ¥0.00</span></div>
                </div>
                <div class="btn_red">立即结算</div>
            </div>
        </div>
        <!-- 猜你喜欢 -->
        <div id="like_title">
            <h3>猜你喜欢</h3>
            <div id="btn_rt"></div>
            <div class="btn_lt"></div>
        </div>
        <div id="shp_transition">
            <ul>
                <li>
                    <img :src="url+'/img/shp/1_n_07468_150x150.jpg'" alt="">
                    <div class="shp_b">
                        <div>LANCOME</div>
                        <div class="font14">兰蔻肌底精华眼霜明眸亮精华眼霜明眸亮精华眼霜明眸亮</div>
                        <div>￥520.00</div>
                    </div>
                </li>
                <li>
                    <img :src="url+'/img/shp/1_n_07468_150x150.jpg'" alt="">
                    <div class="shp_b">
                        <div>LANCOME</div>
                        <div class="font14">兰蔻肌底精华眼霜明眸亮</div>
                        <div>￥520.00</div>
                    </div>
                </li>
                <li>
                    <img :src="url+'/img/shp/1_n_07468_150x150.jpg'" alt="">
                    <div class="shp_b">
                        <div>LANCOME</div>
                        <div class="font14">兰蔻肌底精华眼霜明眸亮</div>
                        <div>￥520.00</div>
                    </div>
                </li>
                <li>
                    <img :src="url+'/img/shp/1_n_07468_150x150.jpg'" alt="">
                    <div class="shp_b">
                        <div>LANCOME</div>
                        <div class="font14">兰蔻肌底精华眼霜明眸亮</div>
                        <div>￥520.00</div>
                    </div>
                </li>
                <li>
                    <img :src="url+'/img/shp/1_n_07468_150x150.jpg'" alt="">
                    <div class="shp_b">
                        <div>LANCOME</div>
                        <div class="font14">兰蔻肌底精华眼霜明眸亮</div>
                        <div>￥520.00</div>
                    </div>
                </li>
              
            </ul>
        </div>
    </div>
        <tail></tail>
        <bottom></bottom>
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
#shp_box{
    width:100%;
    height:120px;
}
#shp_box div#shp{
    width:1190px;
    margin:0 auto;
    padding:25px 0px;
}
#shp_box div#shp div.lo{
    width:300px;
    font-size:39px;
    height:50px;
    line-height:50px;
    text-shadow: 2px 2px #999;
    font-style:italic;
    float:left;
}
/* 购物车流程 */
#shp_box div#shp div.shp_lc{
    width:500px;
    height:59px;
    float:right;
    border-bottom: 3px solid #aaa;
}
#shp_box div#shp div.shp_lc div{
    background:url(http://127.0.0.1:5050/img/shp/checkout_header_step.png) no-repeat;
    width:82px;
    height:59px;
    background-position:-23px 3px;
    float:left;
    margin-right:50px;
}
#shp_box div#shp div.shp_lc :first-child{
    border-bottom:3px solid #000;
}
#shp_box div#shp div.shp_lc :nth-child(2){
    width:125px;
    height:59px;
    background-position:-124px -49px;
    /* border-bottom:3px solid #000; */
}
#shp_box div#shp div.shp_lc :last-child{
    width:125px;
    height:60px;
    background-position:-124px -100px;
}
#shp_box div#shp :after{
    content:"";
    display:block;
    clear:both;
}
/* 购物筐 */
div.shpbox_bg{
    width:100%;
    background-color:#e8e8e8;
    padding:35px;
}
/* 消息提示 */
div.shpbox_bg div.mag {
    width:1190px;
    margin:0 auto;
    height:40px;
    background-color:#fff;
    line-height:40px;
    padding-left:15px;
    font-size:12px;
}
/* 购物清单 */
div.shpbox_bg div.shp_list{
    width:1190px;
    background-color:#fff;
    margin:0 auto;
    margin-top:30px;
}
div.shp_list div.shp_title ul{
    border-bottom:1px solid #e8e8e8;
}
div.shp_list div.shp_title ul li{
    float:left;
    margin-right:90px;
    height:47px;
    line-height: 47px;
    margin-left:19px;
    font-size: 12px;
} 
div.shp_list div.shp_title ul :nth-child(2){
    margin-right:400px;
}
div.shp_list div.shp_title ::after{
    content:"";
    display:block;
    clear:both;
}
/* 购物车商品1 */
div.shp_list div.shp_title div.shp_sp{
    width:1190px;
    height:160px;
}
div.shp_list div.shp_title div.shp_sp div.chb input{
    margin:70px 20px 0px;
}
div.shp_list div.shp_title div.shp_sp div.img{
    margin:30px 40px 0px 10px;
}
div.shp_list div.shp_title div.shp_sp div.img a img {
    width:74px;
    height:74px;
}
/* 商品信息 */
div.shp_list div.shp_title div.shp_sp div.sp_msg{
    margin-top:34px;
    font-size:12px;
}
div.shp_list div.shp_title div.shp_sp div.sp_msg div.detail{
    margin-top:5px;
    margin-left:-1px;
}
div.shp_list div.shp_title div.shp_sp div.sp_msg div.gug{
    margin-top:5px;
    color:#666;
}
/* 单价 */
div.shp_list div.shp_title div.shp_sp div.price{
    margin-top:40px;
    margin-left:295px;
}
/* 数量 */
div.shp_list div.shp_title div.shp_sp div.counts{
    margin-top:35px;
    margin-left:90px;
    border:1px solid #aaa;
    height:28px;
}
div.shp_list div.shp_title div.shp_sp div.counts div.btn1{
    padding:4px 7px;
    float:left;
    border-right:1px solid #aaa;
    cursor:pointer;
}
div.shp_list div.shp_title div.shp_sp div.counts div.num{
    padding-left:30px;
    padding-top:5px;
    width:30;
    
    
}
div.shp_list div.shp_title div.shp_sp div.counts div.btn2{
    margin-top:-26px;
    margin-left:58px;
    float:left;
    padding:4px 5px;
    border-left:1px solid #aaa;
    cursor:pointer;
    

}
/* 小计 */
div.shp_list div.shp_title div.shp_sp div.sum{
    margin-top:42px;
    margin-left:80px;
}
/* 操作 */
div.shp_list div.shp_title div.shp_sp div.oper span{
    width:22px;
    height:22px;
    float:left;
    background:url(http://127.0.0.1:5050/img/shp/checkout_icon.png);
    margin-top:39px;
    margin-left:119px;
}
/* 优惠卷 */
.coupon{
    width:1190px;
    margin:0 auto;
    margin-top:30px;  
}
div.coupon div.coupon_title::after{
    content:"";
    display:block;
    clear:both;
}
div.coupon div.coupon_title span{
    font-size:12px;
}
div.coupon div.coupon_title span.gay{
    color:#9f9f9f;
    font-weight: 100;
}
div.coupon div.coupon_title span.red{
    color:#ef1d1e;
}
div.coupon div.coupon_title div.coupon_r{
    background-color:#000;
    color:#fff;
    font-size:12px;
    width: 88px;
    margin-right: 18px;
    padding: 1px;
    text-align: center;
}
div.coupon div.jun{
    width: 1190px;
    height:176px;
    background-color:#fff;
    margin-top:2px;  
    position: relative;
   
}
div.coupon div.jun div.none{
    width:49px;
    height:32px;
    background:url("http://127.0.0.1:5050/img/shp/sprite_checkout_coupons.png") no-repeat;
    background-position:-19px 0;
    position: absolute;
    top:60px;
    left:570.5px;
}
div.none div.text{
    width:150px;
    position: absolute;
    top: 36px;
    left: -43px;
    color:#a7a7a7;
}
/* 结算 */
.total{
    width:1190px;
    height:60px;
    background-color:#fff;
    margin:0 auto;
    margin-top:30px;
}
.total::after{
    content: "";
    display:block;
    clear:both;
}
/* 结算左侧 */
.total div.total_lt{
    float:left;
    line-height:60px;
}
.total div.total_lt ul li{
    float:left;
    margin-left:30px;
    font-size:12px;
    position:relative;
    cursor:pointer;
}
.total div.total_lt ul li::after{
    content:"";
    display:block;
    clear:both;
}
div.total_lt ul li div.call{
    width:120px;
    height:20px;
    line-height:20px;
    border-radius:10px;
    background-color:#eee;
    position: absolute;
    top:19px;
    padding-left:10px;
}
div.total_lt ul li div.call div.pho{
    width:11px;
    height:11px;
    background:url("http://127.0.0.1:5050/img/shp/checkout-submit-phone.png") no-repeat;
    position :absolute;
    top: 5px;
    left: 100px;
}
/* 结算右侧 */
.total div.total_rt{
    float:right;
    margin-right:183px;
    position: relative;
}
.total div.total_rt::after{
    content:"";
    display:block ;
    clear:both;
}
.total div.total_rt div.rt_lt{
    margin-top: 13px;
    font-size: 12px;
    color:#858585;
}
.total div.total_rt div.rt_lt span{
    font-size:14px;
    color:#000;
}

/* 立即结算 */
.total div.total_rt div.btn_red{
    width: 140px;
    height:60px;
    position:absolute;
    top: 0;
    right: -183px;
    background-color:#ef1d1e;
    color:#fff;
    text-align:center;
    line-height:60px;
    cursor:pointer;
}
.rt_lt :first-child{
    margin-bottom:5px;
}
span.icon{
    display:block;
    position: absolute;
    top:36px;
    left:118px;
    width:16px;
    height:16px;
    margin:0 10px;
    background:url("http://127.0.0.1:5050/img/shp/checkout_first_minu.png") no-repeat;
}

/* 猜你喜欢 */
#like_title{
    width:1190px;
    margin:0 auto;
    margin-top:30px;
    font-weight: bold;
  
}

#like_title div{
    /* border:1px solid #000; */
    width:  50px;
    height:30px;
    float:right;
    margin-top:-27px;
}
#like_title div::after{
    content:"";
    display:block;
    clear:both;
}
#like_title div.btn_lt{
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background:url("http://127.0.0.1:5050/img/shp/checkout_tab_slider_control.png") no-repeat;
    background-position:0 0px;
    margin-right:1px;
}
#like_title :nth-child(2){
    border-left:0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background:url("http://127.0.0.1:5050/img/shp/checkout_tab_slider_control.png") no-repeat;
    background-position:-50px -60px;
}
#shp_transition{
    width:1190px;
    height:308px;
    background-color:#fff;
    margin:0 auto;
    margin-top:10px;
}
#shp_transition ul li{
    float:left;
    width:238px;
    height:308px;
    padding: 20px;
}
#shp_transition ul li img{
    width:180px;
    height:180px;
}
#shp_transition ul li div.shp_b{
    width:195px;
    height:64px;
    font-size:12px;
}
#shp_transition ul li div.shp_b div.font14{
    font-size:14px;
    padding:6px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>