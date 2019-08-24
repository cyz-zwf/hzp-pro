<template>
  <div>
    <top></top>
    <toph></toph>
    <!-- lk商品详情 -->
    <div class="lk-box">
      <div class="lk">
        <!-- 商品左侧 -->
        <div class="lk-lt">
          <!-- 大图详情 -->
          <div class="lk-lt-dt">
            <img :src="url+'img/details/1_n_07468_640x640.jpg'" alt />
          </div>
          <!-- 大图放大镜图标 -->
          <div class="fdj"></div>
        </div>
        <!-- 小图详情 -->
        <div class="lk-lt-xt">
          <ul>
            <li>
              <img :src="url+'img/details/1_n_07468_50x50.jpg'" alt />
            </li>
            <li>
              <img :src="url+'img/details/2_n_07468_50x50.jpg'" alt />
            </li>
            <li>
              <img :src="url+'img/details/3_n_07468_50x50.jpg'" alt />
            </li>
          </ul>
          <!-- 小图详情左按钮箭头 -->
          <div class="lk-lt-xt-zjt"></div>
          <!-- 小图详情右按钮箭头 -->
          <div class="lk-lt-xt-yjt"></div>
        </div>
        <!--  商品右侧-->
        <div class="lk-rt">
          <!-- 商品标题 -->
          <div class="lk-rt-t lt">
            <div class="lk-rt-lt">
              <p class="font-20">兰蔻菁纯臻颜滋润眼霜奢宠礼盒</p>
              <p class="font-14">LANCOME APC FIND YOUR FOUNDATION VS</p>
              <p class="font_small">价值：1917</p>
            </div>
            <div class="lk-rt-rt rt">
              <img :src="url+'img/index/lancome_144X60.png'" alt />
            </div>
          </div>
          <!-- 商品价格 -->
          <div class="lk-rt-m">
            <div class="lk-rt-mt">
              <p class="font_small color-6">价格</p>
              <p class="font-24">¥ 1080</p>
              <span class="bg-red">新品</span>
            </div>
            <!-- 商品促销 -->
            <div class="lk-rt-mm">
              <div class="lk-rt-mm-lt lt">
                <p class="color-6">活动</p>
                <p>
                  <span>满赠</span>"购买官网任意产品，即可获赠体验装一份 （赠品随机发送，数量有限，赠完即止） "
                </p>
              </div>
              <div class="lk-rt-mm-rt rt font_small">
                促销详情
                <!-- 促销详情的小图片 -->
                <div class="cuxtub" data-tub="tub"></div>
                <div class="cuxtub-1" data-tub="tub-1"></div>
              </div>
              <div class="cux1" data-cux="cux1"></div>
            </div>
            <!-- 商品规格 -->
            <div class="lk-sp-ge">
              <div class="lk-sp-ge-t">
                <p class="font_small color-6">
                  规格
                  <span>套装</span>
                </p>
              </div>
              <div class="lk-sp-ge-m">
                <input type="text" value="1" />
                <!-- 下图标按钮 -->
                <div class="lk-sp-ge-ms" data-tb1="tb1">
                  <div class="anniu-s"></div>
                </div>
                <!-- 上图标按钮 -->
                <div class="lk-sp-ge-mx" data-tb2="tb2">
                  <div class="anniu-x"></div>
                </div>
              </div>
              <!-- 加入购物车 -->
              <div class="lk-spcar">
                <div class="lk-spcar-b">
                  <p>加入购物车</p>
                  <!-- 购物车图标 -->
                  <div class="lk-spcar-tb"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品基本信息 -->
    <div class="lk-msg">
      <div class="lk-msg-xq">
        <!-- 左侧猜您喜欢商品展示 -->
        <div class="lk-msg-xq-z lt">
          <div class="lk-b">猜你喜欢</div>
          <!-- 商品展示 -->
          <div class="lk-sp-zsq">
            <div class="lk-zsq-1">
              <a href="#"></a>
              <img :src="url+'img/details/1_n_07456_280x280.jpg'" alt />
              <div class="lk_title">LANCOME</div>
              <div class="mb"></div>
              <p class="font-12">兰蔻菁纯臻颜焕亮眼霜惠选套装</p>
              <p>¥ 1080</p>
            </div>
            <div class="lk-zsq-1">
              <a href="#"></a>
              <img :src="url+'img/details/1_n_07456_280x280.jpg'" alt />
              <div class="lk_title">LANCOME</div>
              <div class="mb"></div>
              <p class="font-12">兰蔻菁纯臻颜焕亮眼霜惠选套装</p>
              <p>¥ 1080</p>
            </div>
            <div class="lk-zsq-1">
              <a href="#"></a>
              <img :src="url+'img/details/1_n_07456_280x280.jpg'" alt />
              <div class="lk_title">LANCOME</div>
              <div class="mb"></div>
              <p class="font-12">兰蔻菁纯臻颜焕亮眼霜惠选套装</p>
              <p>¥ 1080</p>
            </div>
            <div class="lk-zsq-1">
              <a href="#"></a>
              <img :src="url+'img/details/1_n_07456_280x280.jpg'" alt />
              <div class="lk_title">LANCOME</div>
              <div class="mb"></div>
              <p class="font-12">兰蔻菁纯臻颜焕亮眼霜惠选套装</p>
              <p>¥ 1080</p>
            </div>
            <div class="lk-zsq-1">
              <a href="#"></a>
              <img :src="url+'img/details/1_n_07456_280x280.jpg'" alt />
              <div class="lk_title">LANCOME</div>
              <div class="mb"></div>
              <p class="font-12">兰蔻菁纯臻颜焕亮眼霜惠选套装</p>
              <p>¥ 1080</p>
            </div>
          </div>
        </div>

        <!-- 右侧基本信息详情 -->
        <div class="lk-msg-xq-y lt">
          <!-- 详情标题 -->
          <div class="lk-title">
            <ul>
              <li class="lk-msg-b">基本信息</li>
              <li>所有评论</li>
              <li>产品咨询</li>
              <li>配送信息</li>
            </ul>
          </div>
          <!-- 详情内容 -->
          <div class="lk-msg-xinxi">
            <ul>
              <li>适用人群: 女士/男士</li>
              <li>适用部位: 眼部</li>
              <li>功效: 淡化细纹</li>
              <li>适合肤质: 各种肤质</li>
              <li>质地: 霜状</li>
              <li>规格: 套装</li>
              <li>货号: 484263</li>
            </ul>
          </div>
          <!-- 产品描述 -->
          <div class="lk-cp">
            <ul>
              <li class="lk-cp-t">
                <div class="icon1 lt"></div>
                <p>产品描述</p>
              </li>
              <li>
                <p>兰蔻菁纯臻颜焕亮眼霜 20ml</p>
                <p>兰蔻新菁纯臻颜滋润眼霜 5ml样*2</p>
                <p>兰蔻菁纯臻颜防晒隔离乳 SPF50 PA+++ 10ml样</p>
              </li>
              <li class="lk-cp-t">
                <div class="icon2 lt"></div>
                <P>产地</P>
              </li>
              <li>法国</li>
            </ul>
          </div>
          <!-- 商品评论区 -->
          <div class="lk-sp-plq">
            <div class="lk-plq">
              <p class="font-24">商品评论</p>
              <p class="font-17">COMMENTS</p>
              <div class="hx"></div>
            </div>
            <div class="pos-re">
              <div class="write lt"></div>
              <p class="font-21">此商品暂时还没有评价哦~</p>
            </div>
          </div>
          <!-- 产品咨询区 -->
          <div class="lk-sp-plq">
            <div class="lk-plq">
              <p class="font-24">产品咨询</p>
              <p class="font-17">Q&A</p>
              <div class="hx"></div>
            </div>
            <div class="pos-re">
              <div class="lt quest"></div>
              <p class="font-21">有疑问, 来发布第一个问题吧~</p>
              <div class="call rt">我要咨询</div>
            </div>
          </div>
          <!-- 支付及配送 -->
          <div class="lk-sp-plq height-300">
            <div class="lk-plq">
              <p class="font-24">支付及配送</p>
              <p class="font-17">PAYMENT&SHIPPING</p>
              <div class="hx"></div>
            </div>
            <div class="zf">
              <p class="font-b">选择支付方式</p>
              <p class="mar-b">目前我们提供以下2种支付方式:</p>
              <p>1. 在线支付</p>
              <p class="mar-5">支持支付宝、微信、及目前市场所有主流银行卡的在线支付。请在确认订单后选择相应支付界面进行支付。</p>
              <p>2. 货到付款</p>
              <p class="mar-5">您的货款将在订单送达后，由送货员直接收取，请在签收后付款，并在送货员在场情况下开箱验货。(货到付款金额不能超过2万元)</p>
            </div>
          </div>
          <!-- 价格声明 -->
          <div class="lk-sp-plq">
            <div class="lk-plq">
              <p class="font-24">价格声明</p>
              <p class="font-17">PRICE STATEMENT</p>
              <div class="hx"></div>
            </div>
            <div class="jg">
              <p>本店商品标注的促销价，为此商品的实际售价。本店标注的其他价格信息，如划线价、专柜价、建议零售价、价值等，为仅供消费者参考的市场价格信息，来源为有关商品实体店的柜台售价、品牌方建议零售价或者根据有关商品正装产品售价和容量推算的价值等，便于您了解市场行情和价格变动。但是，由于地区、时间和行情波动因素，这些价格的实际情况可能与本店标注的其他价格信息有所不同。</p>
            </div>
          </div>
          <!-- 退换货规定 -->
          <div class="lk-sp-plq height-300">
            <div class="lk-plq">
              <p class="font-24">退换货规定</p>
              <p class="font-17">RETURN PROVISIONS</p>
              <div class="hx"></div>
            </div>
            <div class="thh">
              <p>1. 我们不接受包装盒已被开封的商品的退换货（商品外包装盒上的透明封装胶纸已被撕开同样视为开封），请您谅解！</p>
              <p>2. 所有未开封的商品如需退换请于签收日算起14日内办理，退货收到并确认无误后于一周内办理退款。</p>
              <p>3. 如您需整单退换，请您务必将当次订单中所有商品（包括免费赠品、包装礼盒）全部退回。</p>
              <p>4. 因顾客自身原因造成退换货时，由顾客承担商品退回时的邮资和再次发送时的运费。</p>
              <p>5. 如该商品曾被积分，退货后，该笔金额产生的积分将被从积分数中扣除。</p>
              <p>
                6.
                如您希望调换其它等价商品，请您先为需要退回的订单办理退货，我们收到退货并确认无误后，将为您发送新的商品。若您希望调换的为非等价商品，请您先为您的订单办理退货及退款，然后至网站另行订购您喜欢的其它商品，我们将另行发送。
              </p>
              <p>7. 如您在使用了于丝芙兰网站购买的产品后出现过敏症状，在提供相关医院出具的有效证明后，我们将接受此产品的退货。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
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
};
</script>
<style scoped>
.lk-box{
    width:100%;  
}
/* 商品 */
.lk{
    width:1190px;
    height: 400px;
    margin:0 auto;
    position: relative;  
}
.lk-lt{
    width:320px;
    height:400px;  
}
 /* 大图详情  */
.lk-lt-dt img{
    width:320px;
    height:320px;
}
/* 大图放大镜图标 */
.fdj{
    width:16px;
    height:20px;
    background:url("http://127.0.0.1:5050/img/details/PDP-ICON.png");
    background-position: -24px 1px;
    position: absolute;
    top:0px;
}
/* 小图详情  */
.lk-lt-xt{
    position:absolute;
    top:330px;
}
.lk-lt-xt ul li{
    float:left;
    margin-left:30px;
}
/* 小图详情左按钮箭头定位 */
.lk-lt-xt-zjt{
    width:16px;
    height:20px;
    background:url("http://127.0.0.1:5050/img/details/PDP-ICON.png");
    background-position: -59px -38px;
    position: absolute;
    top:18px;
    left:10px;
}
/* 小图详情右按钮箭头定位 */
.lk-lt-xt-yjt{
    width:11px;
    height:24px;
    background:url("http://127.0.0.1:5050/img/details/PDP-ICON.png");
    background-position: -24px -56px;
    position: absolute;
    top:18px;
   right:-38px;
}
/* 商品右侧 */
.lk-rt{
    width:830px;
    height: 400px;
    float:right;
   margin-top:-401px;
}
/* 商品标题 */
.lk-rt-t{
    width:100%;
    height:73px;
    padding-top:2px;
    padding-left:5px;
    border-bottom: 1px solid #e8e8e8; 
}
.lk-rt-lt p.font-20{
    font-size:20px;
    margin-bottom:4px;
}
.lk-rt-lt p.font-14{
    font-size:14px;
    margin-bottom:6px;
}
.lk-rt-lt p.font_small{
    color:#666;
}
.lk-rt-rt{
    margin-top:-63px;
}
/* 商品价格 */
.lk-rt-mt {
    clear:both;
    height:49px;
    padding-top:10px;
    padding-left:5px;
    position: relative;
}
.lk-rt-mt p{
    float:left;
    margin-right:50px;
    line-height:49px;
}
.lk-rt-mt p.font-24{
    font-size:24px;
}
.lk-rt-mt span.bg-red{
    background-color:#ff0000;
    color:#fff;
    padding:5px;
    font-size:12px;
    position:absolute;
    top:21px;
}
/* 商品促销 */
.lk-rt-mm{
    border-bottom:1px solid #e8e8e8; 
    padding-bottom:10px;
    position: relative;

}
/* 解决高度坍塌 */
.lk-rt-mm::after{
    content:"";
    display:block;
    clear:both;
}
/* 清除浮动 */
.lk-rt-mm-lt{
    clear:both;
    padding:10px 0 10px 0;
}
.lk-rt-mm-lt p{
     float:left;
     margin-right: 50px;
     font-size:12px;
     margin-left:5px;
}
.lk-rt-mm-lt p span{
    border:1px solid #ff0000;
    padding:5px 4px 3px 4px;
    margin-right:16px;
    color:#ff0000;
}
.lk-rt-mm-rt{
    border:1px solid #e8e8e8; 
    padding:5px ;
    padding-right:20px;
    margin-right:5px;
}
/* 促销详情小图标 */
.cuxtub{
    width:10px;
    height:10px;
    background:url("http://127.0.0.1:5050/img/details/PDP-ICON.png") no-repeat;
    background-position: -41px -14px;
    position:absolute;
    bottom:27px;
    right:9px;
    display:block;
}
.cuxtub-1{
    width:10px;
    height:6px;
    background:url("http://127.0.0.1:5050/img/details/PDP-ICON.png") no-repeat;
    background-position: -50px -18px;
    position:absolute;
    bottom:29px;
    right:10px;
    display:none;
}
.cux1{
    width:521px;
    height:240px;
    border:1px solid #000; 
    position:absolute;
    left:303px;
    top:38px;
    display:none;
}
/* 商品规格 */

.lk-sp-ge-t{
    margin-top:42px;
    margin-left:5px;
}
.lk-sp-ge-t p span{
    margin-left:50px;
    padding:5px;
    border:2px solid #000;
    color:#000;
}
.lk-sp-ge-m{
    margin-top:20px;
    margin-left:80px;
    position: relative;
}
.lk-sp-ge-m input{
    width:70px;
    height:39px;
    padding:15px;
}
/* 上下图标按钮的定位 */
.lk-sp-ge-ms,.lk-sp-ge-mx{
    width:19px;
    height:19px;
    border:1px solid #e8e8e8;
    position:absolute;
    bottom:1px;
    left:50px;
}
/* 下图标按钮的定位 */
.lk-sp-ge-m div.lk-sp-ge-mx{
    position: absolute;
    top:1px;
    left:50px;
}
/* 上图标按钮背景图标定位 */
.lk-sp-ge-m div.anniu-s{
    width:10px;
    height:10px;
    background:url("http://127.0.0.1:5050/img/details/PDP-ICON.png") no-repeat;
    background-position: -41px -14px;
    position:absolute;
    bottom:4px;
    left:6px;
    opacity:0.5;
}
/* 下图标按钮背景图片定位 */
.lk-sp-ge-m div.anniu-x{
    width:10px;
    height:6px;
    background:url("http://127.0.0.1:5050/img/details/PDP-ICON.png") no-repeat;
    background-position: -50px -18px;
    position: absolute;
    left:5px;
    bottom:4px;
}
/* 加入购物车 */
.lk-spcar{
    margin-top:15px;
    margin-left:80px;
    position: relative;
}
.lk-spcar-b{
    width:175px;
    height:40px;
    background-color:#ff0000;
}
.lk-spcar-b:hover{
    background-color:#000;
}
.lk-spcar-b p{
    color:#fff;
    position:absolute;
    top:9px;
    left:29px;
}
/* 购物车图标定位 */
.lk-spcar-tb{
    width:16px;
    height:21px;
    background:url("http://127.0.0.1:5050/img/details/PDP-ICON.png");
    background-position: -24px -15px;
    position:absolute;
    top:9px;
    left:123px;  
}
/* 商品基本信息  */
.lk-msg{
    width:100%;
}
.lk-msg-xq{
    width:1190px;
    margin:0 auto;
}
/* 浮动引起 解决高度坍塌 */
.lk-msg-xq::after{
    content:"";
    display:block;
    clear:both;
}
/* 左侧猜您喜欢商品展示 */
.lk-msg-xq-z{
    width: 180px; 
}
.lk-b{
    border-bottom:1px solid #000;
    margin-top:10px;
    padding:5px;
}
/* 商品展示区 */
.lk-sp-zsq{
    height:2000px;
    border-right:1px solid #e8e8e8;
    margin-top:30px;
}
.lk-zsq-1{
    width:179px;
    height:252px;
    margin-top:40px;
    text-align:center;
    padding-right:20px;
    cursor:pointer;
}
.lk-zsq-1 img{
    width:160px;
    height:160px;
}
.lk-zsq-1 div.lk_title{
    font-size:14px;
    font-weight: bold;
}
.lk-zsq-1 div.mb{
    width:15px;
    height:1px;
    border-bottom:1px solid #666;
    margin:5px 0 5px 80px;
    cursor: pointer;
}
.lk-zsq-1 p.font-12{
    font-size:13px;
    margin-bottom:9px;
}
.lk-zsq-1 p.font-12:hover{
    color:#EE0000
}
/* 右侧基本信息详情 */
.lk-msg-xq-y{
    width:990px;
    height:2138px;
}
/* 详情标题 */
.lk-title{
    margin-left:30px;
    border-bottom:1px solid #000;
}
.lk-title ul li{
    float:left;
    margin-right:30px;
    margin-top:10px;
    padding:5px;
}
.lk-title ul li.lk-msg-b{
    border-bottom:2px solid #000;
}
/* 解决li浮动带来的高度坍塌 */
.lk-title:after{
    content:"";
    display:block;
    clear:both;
}
/* 详情内容 */
.lk-msg-xq-y div.lk-msg-xinxi{
    margin-top:20px;
    margin-left:30px;
}
.lk-msg-xinxi ul li{
    float:left;
    width:230px;
    margin-bottom:12px;
    font-size:12px;
}
/* 解决li浮动带来的高度坍塌 */
.lk-msg-xinxi::after{
    content:"";
    display:block;
    clear:both;
}
/* 产品描述 */
.lk-cp{
    margin-left:20px;
    position: relative;
}
.lk-cp ul li{
    margin-top:17px;
    font-size:12px;
}
.lk-cp ul li.lk-cp-t{
    font-size:15px;
}
.lk-cp-t div{
    width:18px;
    height:17px;
    background:url("http://127.0.0.1:5050/img/details/PDP-ICON.png") no-repeat;
    background-position:0px -68px;
}
/* 商品评论区  产品区*/
.lk-sp-plq{
    height:250px;
    border-bottom:1px solid #ddd;
    margin-top:50px;
    
}
.lk-plq{
    text-align: center;
}
.lk-sp-plq::after{
    content:"";
    display:block;
    clear:both;
}
.font-24{
    font-size:24px;
}
.font-17{
    font-size:17px;
    margin-top:10px;
}
.hx{
    width:30px;
    height:1px;
    margin-left:479px;
    margin-top:15px;
    border-bottom:1px solid #000;
    margin-bottom:20px;
}
.pos-re{
    text-align:left;

}
.write{
    width:45px;
    height:45px;
    background:url("http://127.0.0.1:5050/img/details/PDP-ICON2.png");
    background-position:-40px -105px;
    margin-left:350px;
}
.font-21{
    font-size:21px;
    color:#999;
    padding-top:11px;
    padding-left:415px;
}
/* 产品咨询区 */
.quest{
    width:40px;
    height:45px;
    background:url("http://127.0.0.1:5050/img/details/PDP-ICON2.png");
    background-position:0px -105px;
    margin-left:350px;
}
.call{
    width:126px;
    height:40px;
    background-color:#EE0000;
    color:#fff;
    text-align:center;
    line-height:40px;
    margin-top:-30px;
}
/* 我要咨询 */
.call:hover{
    background-color:#000;
    cursor: pointer;
}
/* 支付及配送 */
.lk-msg div.height-300{
    height:390px;
}
.zf{
    margin-top:100px;
}
.zf p{
    margin-bottom:5px;
    margin-left:20px;
    font-size:14px;
    color:#333;
}
.zf p.font-b{
    color:#000;
    font-weight:bold;
}
.zf p.mar-b{
    margin-bottom:18px;
}
.zf p.mar-5{
    display:block;
    margin-left:50px;
    margin-bottom:27px;
}
/* 价格声明 */
.jg p{
    color:#333;
    margin-top:61px;
    margin-left:20px;
    font-size:14px;
}
/* 退换货规定 */
.thh{
    margin-top:76px;
    margin-left:20px;
}
.thh p{
    color:#333;
    font-size:14px;
    margin-bottom:11px;
}
</style>