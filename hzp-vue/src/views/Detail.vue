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
@import url("../assets/css/comm.css");
@import url("../assets/css/details-lk.css");
</style>