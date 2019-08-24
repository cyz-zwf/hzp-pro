<template>
  <div>
    <top></top>
    <toph></toph>
    <!-- 大轮播图+导航 -->
    <div class="lb-box">
      <div class="z-box">
        <!-- 轮播图 -->
        <div class="lb banner">
          <div class="overflow">
            <!-- 左侧按钮 -->
            <div class="btn_left"></div>
            <ul class="ul-imgs" id="ulimage">
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/hp_live_20190621.gif'" alt />
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/hp_foundation_20190620.jpg'" alt />
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/hp_longwearing_20190627.gif'" alt />
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/hp_foundation_20190620.jpg'" alt />
                </a>
              </li>
            </ul>
            <!-- 小圆点 -->
            <ul class="ul_idx">
              <li class="active"></li>
              <li></li>
              <li></li>
            </ul>
            <!-- 右侧按钮 -->
            <div class="btn_right"></div>
          </div>

          <!-- 导航 -->
          <div class="nav">
            <ul>
              <li>
                <a class="dis-b" href="#">功效</a>
                <a href="#">保湿补水</a>
                <a href="#">底妆修容</a>
                <div class="show">功效</div>
              </li>
              <li>
                <a class="dis-b" href="#">护肤</a>
                <a href="#">卸妆洁面</a>
                <a href="#">美容仪器</a>
                <a href="#">保湿喷雾</a>
                <div class="show">护肤</div>
              </li>
              <li>
                <a class="dis-b" href="#">彩妆</a>
                <a href="#">保湿补水</a>
                <a href="#">底妆修容</a>
                <div class="show">彩妆</div>
              </li>
              <li>
                <a class="dis-b" href="#">香水</a>
                <a href="#">保湿补水</a>
                <a href="#">底妆修容</a>
                <div class="show">香水</div>
              </li>
              <li>
                <a class="dis-b" href="#">男士护肤</a>
                <a href="#">保湿补水</a>
                <a href="#">底妆修容</a>
                <div class="show">男士护肤</div>
              </li>
              <li>
                <a class="dis-b" href="#">洗浴护体</a>
                <a href="#">保湿补水</a>
                <a href="#">底妆修容</a>
                <div class="show">洗浴护体</div>
              </li>
              <li>
                <a class="dis-b" href="#">美容护发</a>
                <a href="#">保湿补水</a>
                <a href="#">底妆修容</a>
                <div class="show">美容护发</div>
              </li>
              <li>
                <a class="dis-b" href="#">工具</a>
                <a href="#">保湿补水</a>
                <a href="#">底妆修容</a>
                <div class="show">工具</div>
              </li>
              <li>
                <a class="dis-b" href="#">口红</a>
                <a href="#">保湿补水</a>
                <a href="#">底妆修容</a>
                <div class="show">口红</div>
              </li>
              <li>
                <a class="dis-b" href="#">面膜</a>
                <a href="#">保湿补水</a>
                <a href="#">底妆修容</a>
                <div class="show">面膜</div>
              </li>
            </ul>
            <!-- 菜单栏 -->
          </div>
        </div>
      </div>
    </div>
    <!-- 小图 -->
    <div class="x-t">
      <div class="auto-1">
        <a href="#">
          <img :src="url+'img/index/hp_weeklyspecial_20190627.jpg'" alt />
        </a>
        <a class="ml" href="#">
          <img :src="url+'img/index/hp_miniheroguerlain_20190627.jpg'" alt />
        </a>
        <a class="ml" href="#">
          <img :src="url+'img/index/hp_miniheroshu_20190627.jpg'" alt />
        </a>
      </div>
    </div>
    <!-- 1f 标题 -->
    <div class="title">
      <h2 class="lt">
        全部品牌
        <span>ALL BRANDS</span>
      </h2>
      <ul>
        <li>
          <a href="#">全部品牌</a>
        </li>
        <li>
          <a href="#">独家品牌</a>
        </li>
        <li>
          <a class="fb" href="#">热门品牌</a>
        </li>
      </ul>
    </div>
    <!-- 1f 小轮播图和各品牌商家 -->
    <div class="f1-box">
      <div class="dis-f">
        <!-- 小图轮播 -->
        <div class="x-lb">
          <a href="#">
            <img :src="url+'img/index/hp_superbrand2_20190627.jpg'" alt />
          </a>
        </div>
        <!-- 品牌商家 -->
        <div class="std">
          <div class="std-1">
            <ul>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/sephoracollection_144X60.png'" alt />
                </a>
                <div data-stds="sdts" class="sdts">
                  <p>兰蔻</p>
                  <div class="djck">点击查看</div>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/esteelauder_144X60.png'" alt />
                </a>
                <div data-stds="sdts" class="sdts">
                  <p>兰蔻</p>
                  <div class="djck">点击查看</div>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/lancaster_144X60.png'" alt />
                </a>
                <div data-stds="sdts" class="sdts">
                  <p>兰蔻</p>
                  <div class="djck">点击查看</div>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/fresh_144X60.png'" alt />
                </a>
                <div data-stds="sdts" class="sdts">
                  <p>兰蔻</p>
                  <div class="djck">点击查看</div>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/loewe_144X60.png'" alt />
                </a>
                <div data-stds="sdts" class="sdts">
                  <p>兰蔻</p>
                  <div class="djck">点击查看</div>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/maisonmargiela_144X60.png'" alt />
                </a>
                <div data-stds="sdts" class="sdts">
                  <p>兰蔻</p>
                  <div class="djck">点击查看</div>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/sk-ii_144X60.png'" alt />
                </a>
                <div data-stds="sdts" class="sdts">
                  <p>兰蔻</p>
                  <div class="djck">点击查看</div>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/mariedalgarcolorstudio_144X60.png'" alt />
                </a>
                <div data-stds="sdts" class="sdts">
                  <p>兰蔻</p>
                  <div class="djck">点击查看</div>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/peterthomasroth_144X60.png'" alt />
                </a>
                <div data-stds="sdts" class="sdts">
                  <p>兰蔻</p>
                  <div class="djck">点击查看</div>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/refa_144X60.png'" alt />
                </a>
                <div data-stds="sdts" class="sdts">
                  <p>兰蔻</p>
                  <div class="djck">点击查看</div>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/bobbibrown_144X60.png'" alt />
                </a>
                <div data-stds="sdts" class="sdts">
                  <p>兰蔻</p>
                  <div class="djck">点击查看</div>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/maisonmargiela_144X60.png'" alt />
                </a>
                <div data-stds="sdts" class="sdts">
                  <p>兰蔻</p>
                  <div class="djck">点击查看</div>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/dior_144X60.png'" alt />
                </a>
                <div data-stds="sdts" class="sdts">
                  <p>兰蔻</p>
                  <div class="djck">点击查看</div>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/ernolaszlo_144X60.png'" alt />
                </a>
                <div data-stds="sdts" class="sdts">
                  <p>兰蔻</p>
                  <div class="djck">点击查看</div>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/wei_144X60.png'" alt />
                </a>
                <div data-stds="sdts" class="sdts">
                  <p>兰蔻</p>
                  <div class="djck">点击查看</div>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <img :src="url+'img/index/guerlain_144X60.png'" alt />
                </a>
                <div data-stds="sdts" class="sdts">
                  <p>兰蔻</p>
                  <div class="djck">点击查看</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 2f标题 -->
    <div class="f2-title">
      <div class="title">
        <h2 class="lt">
          护肤品类
          <span>SKINCARE</span>
        </h2>
        <ul>
          <li>
            <a href="#">全部</a>
          </li>
          <li>
            <a href="#">面部精华</a>
          </li>
          <li>
            <a href="#">美容仪</a>
          </li>
          <li>
            <a href="#">面膜</a>
          </li>
          <li>
            <a class="fb" href="#">惠选套装</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- f2图片展示区 -->
    <div class="f2-box">
      <div class="f2-2">
        <!-- f2左边大图 -->
        <a class="zsq-dt" href="#">
          <img :src="url+'img/index/hp_skinfloor_20190627.jpg'" alt />
        </a>
        <!-- f2右边小图展示 -->
        <div class="zsq-1">
          <ul>
            <li>
              <div>
                <a class="fb" href="#">LANCOME</a>
              </div>
              <div>
                <a href="#">兰蔻眼部精华肌底液明眸亮...</a>
              </div>
              <div>
                <a href="#">￥680.00</a>
              </div>
              <a class="zsq-xt" href="#">
                <img :src="url+'img/index/1_n_07449_180x180.jpg'" alt />
              </a>
            </li>
            <li>
              <div>
                <a class="fb" href="#">LANCOME</a>
              </div>
              <div>
                <a href="#">兰蔻眼部精华肌底液明眸亮...</a>
              </div>
              <div>
                <a href="#">￥680.00</a>
              </div>
              <a class="zsq-xt" href="#">
                <img src="img/index/1_n_07449_180x180.jpg" alt />
              </a>
            </li>
            <li>
              <div>
                <a class="fb" href="#">LANCOME</a>
              </div>
              <div>
                <a href="#">兰蔻眼部精华肌底液明眸亮...</a>
              </div>
              <div>
                <a href="#">￥680.00</a>
              </div>
              <a class="zsq-xt" href="#">
                <img src="img/index/1_n_07449_180x180.jpg" alt />
              </a>
            </li>
            <li>
              <div>
                <a class="fb" href="#">LANCOME</a>
              </div>
              <div>
                <a href="#">兰蔻眼部精华肌底液明眸亮...</a>
              </div>
              <div>
                <a href="#">￥680.00</a>
              </div>
              <a class="zsq-xt" href="#">
                <img src="img/index/1_n_07449_180x180.jpg" alt />
              </a>
            </li>
            <li>
              <div>
                <a class="fb" href="#">LANCOME</a>
              </div>
              <div>
                <a href="#">兰蔻眼部精华肌底液明眸亮...</a>
              </div>
              <div>
                <a href="#">￥680.00</a>
              </div>
              <a class="zsq-xt" href="#">
                <img src="img/index/1_n_07449_180x180.jpg" alt />
              </a>
            </li>
            <li>
              <div>
                <a class="fb" href="#">LANCOME</a>
              </div>
              <div>
                <a href="#">兰蔻眼部精华肌底液明眸亮...</a>
              </div>
              <div>
                <a href="#">￥680.00</a>
              </div>
              <a class="zsq-xt" href="#">
                <img src="img/index/1_n_07449_180x180.jpg" alt />
              </a>
            </li>
            <li>
              <div>
                <a class="fb" href="#">LANCOME</a>
              </div>
              <div>
                <a href="#">兰蔻眼部精华肌底液明眸亮...</a>
              </div>
              <div>
                <a href="#">￥680.00</a>
              </div>
              <a class="zsq-xt" href="#">
                <img src="img/index/1_n_07449_180x180.jpg" alt />
              </a>
            </li>
            <li>
              <div>
                <a class="fb" href="#">LANCOME</a>
              </div>
              <div>
                <a href="#">兰蔻眼部精华肌底液明眸亮...</a>
              </div>
              <div>
                <a href="#">￥680.00</a>
              </div>
              <a class="zsq-xt" href="#">
                <img src="img/index/1_n_07449_180x180.jpg" alt />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 图标品牌栏 -->
    <div>
      <div></div>
    </div>
    <!-- 页面滚动效果 -->
    <div id="FixedTop">
      <div class="FTop">
        <div class="Ftop_logo">C y z & Z h u</div>
        <div class="Ftop_box">
          <div class="text">
            <input type="text" />
          </div>
          <div class="search">搜索</div>
        </div>
      </div>
    </div>
    <!-- 右边滑动效果 -->
    <fixed></fixed>
    <!-- 左边滑动效果 -->
    <div id="FixedLeft"></div>
    <!-- 底部 -->
    <tail></tail>
    <bottom></bottom>
  </div>
</template>
<script>
export default {
  //   @import url("../assets/js/index.js");
  data() {
    return {
      url: "http://127.0.0.1:5050/"
    };
  },
  methods: {},
  mounted() {

    //  轮播图
    var i = 0; //现在正在显示第几张图片，从0开始
    var liwidth = 1190; //每个li的固定宽度
    var duration = 500; //每次轮播动画持续的时间
    var licount = 3; //li的总个数
    //要移动的ul
    var ulimage = document.getElementsByClassName("ul-imgs")[0];
    //包含小圆点列表的ul
    var ulidx = document.getElementsByClassName("ul_idx")[0];
    var lis = ulidx.children; //小圆点的元素列表
    //从当前位置移动到任意一个范围内的位置
    function moto(to) {
      if (to == undefined) {
        //如果用户没有传入要跳到第几张图，就默认跳到当前图的下一个张
        to = i + 1;
      }
      if (i == 0) {
        if (to > i) {
          //如果要看当前位置右边的图片，是不会出问题的
          ulimage.style.transition = "transition";
        } else {
          //只有i=0在开头，且还要看左边的图片时，才会出问题
          //为了避免用户再次看到偷梁换柱的效果，先把transition class去掉
          ulimage.style.transition = "";
          //将ulImgs拉取到最左侧
          ulimage.style.marginLeft = -liwidth * licount + "px";
          //定时器是为了将偷梁换柱操作和加回transition属性的操作强行隔离开
          setTimeout(function() {
            moto(licount - 1);
          }, 100);
          return;
        }
      }
      i = to; //先将表示第几张图片的变量i变为目标位置
      //再用i计算ulimgs的marginLeft距离
      ulimage.style.marginLeft = -i * liwidth + "px";
      //先删除所有小圆点的class
      for (var li of lis) {
        li.className = "";
      }
      //console.log(i);
      //当transition动画播放完之后，才
      if (i == licount) {
        i = 0;
        setTimeout(function() {
          ulimage.style.transition = ""; //清掉transition属性

          ulimage.style.marginLeft = 0; //将ulImgs拉回0位置
        }, duration);
      }
      // console.log(i);
      //再给当前位置的小圆点添加class active
      lis[i].className = "active";
      lis[i].style.transition = "transition";
    }
    //左右按钮
    var btnLeft = document.getElementsByClassName("btn_left")[0];
    var btnRight = document.getElementsByClassName("btn_right")[0];
    var open = true; //用开关，控制，上次动画没有播放完，下次动画不能开始！
    btnRight.onclick = function() {
      //调用两个按钮公共的移动方法，参数1表示移动到i+1的位置，相当于左移一个
      move(1);
    };
    //两个按钮共用的移动函数，n传入1时，移动到i+1位置，左移。n传入-1时，移动到i-1位置，右移
    function move(n) {
      if (open) {
        //只有可以单击时
        //console.log(i+n);
        moto(i + n); //才调用真正移动ul的方法
        open = false; //马上把开关关上，禁止再次点击
        //只有本地transition动画播放完，才能自动打开开关，点击按钮才有反应。
        setTimeout(function() {
          open = true;
        }, duration + 100);
      }
    }
    btnLeft.onclick = function() {
      move(-1);
    };
    // 自动播放
    var interval = 3000;
    var timer = setInterval(function() {
      moto();
    }, 3000);
    var banner = document.getElementsByClassName("banner")[0];
    banner.onmouseover = function() {
      clearInterval(timer);
    };
    banner.onmouseout = function() {
      timer = setInterval(function() {
        moto();
      }, 3000);
    };
    //小圆点
    var ulIdx = document.getElementsByClassName("ul_idx")[0];
    //console.log(ulIdx);
    var open = true;
    ulIdx.onclick = function(e) {
      if (open) {
        var li = e.target;
        console.log(li.nodeName);
        if (li.nodeName == "LI") {
          if (li.style.active !== "active") {
            for (var i = 0; i < lis.length; i++) {
              if (lis[i] == li) {
                break;
              }
            }
            moto(i);
            setTimeout(function() {
              open = true;
            }, duration);
          }
        }
      }
    };
  }
};
</script>
<style  scoped>
/* 最外部的盒子 */
body {
  background-color: #f5f5f5;
}
.lb-box {
  width: 100%;
  height: 400px;
  background-color: #f7ceb5;
  position: relative;
  z-index: 0;
}
/* 背景图 */
.lb {
  width: 1190px;
  margin: 0 auto;
  height: 400px;
  position: relative;
  /* background:url(../img/index/hp_longwearing_20190627.gif); */
}
.overflow {
  width: 1190px;
  margin: 0 auto;
  overflow: hidden;
}
/* 轮播图 */
.lb-box div.banner ul.ul-imgs {
  width: 4760px;
  margin-left: 0px;
}
.lb-box div.banner ul.ul-imgs.transition,
.lb-box div.banner ul.ul_idx.transition {
  transition: all 0.5s linear;
}
.lb-box div.banner ul.ul-imgs li {
  width: 1190px;
  float: left;
}
/* 小圆点设置 */
.lb-box div.banner ul.ul_idx {
  position: absolute;
  bottom: 25px;
  left: 50%;
  margin-left: 100px;
}
.lb-box div.banner ul.ul_idx > li {
  float: left;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 5px;
}
.lb-box div.banner ul.ul_idx li.active {
  background-color: rgb(68, 67, 66);
}
/* 左按钮 */
.lb-box div.banner div.btn_left {
  position: absolute;
  height: 52px;
  width: 34px;
  left: 250px;
  top: 174px;
  background: url("http://127.0.0.1:5050/img/index/ic_index_normal.png")
    no-repeat;
  background-position: -81px -152px;
}
/* 右按钮 */
.lb-box div.banner div.btn_right {
  position: absolute;
  height: 52px;
  width: 34px;
  right: 20px;
  top: 174px;
  background: url("http://127.0.0.1:5050/img/index/ic_index_normal.png")
    no-repeat;
  background-position: -115px -152px;
}
.lb-box div.banner div.btn_right:hover {
  background-position: -195px -152px;
  cursor: pointer;
}
.lb-box div.banner div.btn_left:hover {
  background-position: -159px -152px;
  cursor: pointer;
}

/* 导航box */
div.lb div.nav {
  position: absolute;
  background-color: #fff;
  z-index: 3;
  top: 0;
}
/* 导航下的列表 */
div.lb div.nav ul li {
  width: 240px;
  border-bottom: 1px solid #f5f5f5;
  padding: 11px 0px 8px 15px;
}
/* 导航下的标题 */
div.lb div.nav ul li a.dis-b {
  display: block;
  font-weight: bold;
  color: #000;
  margin-bottom: 2px;
}
/* 导航字体 */
div.lb div.nav ul li a {
  font-size: 12px;
  color: #666;
}
/* 菜单栏 */
div.nav > ul li div.show {
  width: 950px;
  height: 560px;
  position: absolute;
  top: 0px;
  left: 240px;
  background-color: #fff;
  box-shadow: 1px 1px 25px rgba(166, 170, 170, 0.6);
  display: none;
  z-index: -1;
}
div.lb div.nav ul li:hover div.show {
  display: block;
}
div.lb div.nav ul li:hover {
  z-index: -2;
  background-color: #fff;
  box-shadow: 0px 0px 100000px 1px rgba(166, 170, 170, 0.6) !important;
}
/* 小图 */
.x-t {
  width: 100%;
}
.auto-1 {
  width: 1190px;
  margin: 0 auto;
}
.auto-1 a img {
  margin-left: 255px;
  margin-top: 10px;
}
.auto-1 a.ml img {
  margin-left: 3px;
}
/* 1f标题 f2标题*/
.title {
  width: 1190px;
  height: 30px;
  margin: 0 auto;
  margin-top: 58px;
}
h2 span {
  font-weight: lighter;
  font-size: 19px;
}
.title ul li {
  float: right;
  margin-left: 40px;
}
.title ul li a {
  color: #000;
  font-size: 14px;
  line-height: 40px;
}
/* 1f box */
.f1-box {
  width: 100%;
  height: 320px;
  clear: both;
}
.dis-f {
  width: 1190px;
  height: 320px;
  margin: 0 auto;
}
/* 小轮播图 */
.x-lb {
  float: left;
}
.x-lb img {
  height: 320px;
  width: 590px;
}
/* 品牌商家 */
.std-1 ul::after {
  content: "";
  display: block;
  clear: both;
}
.std-1 ul li {
  width: 148px;
  height: 78px;
  border: 1px solid #e8e8e8;
  float: left;
}
.std-1 ul li:hover {
  width: 148px;
  height: 78px;
  background-color: rgba(0, 0, 0, 0.8);
  float: left;
}
.std-1 ul li div.sdts {
  width: 147px;
  height: 78px;
  text-align: center;
  position: relative;
  top: -65px;
  display: none;
}
.std-1 ul li:hover div.sdts {
  display: inline-block;
}
.std-1 ul li:hover div.sdts p {
  margin-top: 15px;
  color: #fff;
  font-size: 14px;
}
.std-1 ul li:hover div.djck {
  color: #fff;
  width: 80px;
  height: 20px;
  margin: 0 auto;
  background-color: #ee0000;
  border-radius: 30px;
  line-height: 20px;
  font-size: 14px;
  margin-top: 10px;
}
/* f2图片展示区 */
.f2-box {
  width: 100%;
  clear: both;
}
.f2-2 {
  width: 1190px;
  height: 500px;
  margin: 0 auto;
}
/* f2左边大图 */
a.zsq-dt img {
  width: 390px;
  height: 498px;
  float: left;
}
/* f2右边小图展示 */
.zsq-1 {
  width: 798px;
  height: 498px;
  float: left;
}
.zsq-1 ul li {
  width: 199px;
  height: 250px;
  padding: 15px 0 15px 10px;
  border: 1px solid #e8e8e8;
  background: #fff;
  float: left;
}
.zsq-1 ul li div a {
  color: #000;
  font-size: 14px;
}
.zsq-1 ul li a img {
  width: 164px;
  height: 140px;
  transition: 1s;
  margin: 0 auto;
  margin-top: 20px;
}
.zsq-1 ul li a img:hover {
  transform: scale(1.1);
}

@-webkit-keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}
@keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}

.auto-1 img:hover {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipOutY;
  animation-name: flipOutY;
}

/* 页面滚动效果 */
#FixedTop {
  width: 100%;
  height: 0px;
  background-color: #fff;
  box-shadow: 1px 1px 5px #f5f5f5;
  position: fixed;
  top: 0;
  opacity: 1;
  overflow: hidden;
  transition: all 0.5s linear;
}
#FixedTop.show {
  height: 60px;
  opacity: 1;
}

#FixedTop div.FTop {
  width: 1190px;
  margin: 0 auto;
}
#FixedTop div.FTop::after {
  content: "";
  display: block;
  clear: both;
}
#FixedTop div.Ftop_logo {
  font-size: 39px;
  text-shadow: 2px 2px #999;
  font-style: italic;
  float: left;
  line-height: 60px;
  margin-right: 116px;
  margin-left: 124px;
}
#FixedTop div.Ftop_box {
  position: relative;
}
#FixedTop div.Ftop_box div.text {
  padding-top: 13px;
}
#FixedTop div.Ftop_box input {
  width: 540px;
  height: 36px;
  float: left;
}
#FixedTop div.Ftop_box div.search {
  border: 1px solid #000;
  width: 90px;
  height: 36px;
  background-color: #000;
  color: #fff;
  position: absolute;
  right: 95px;
  text-align: center;
  line-height: 36px;
}

/* 左边滑动效果 */
</style>