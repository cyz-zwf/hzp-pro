<template>
  <div id="FixedRight">
    <ul>
      <li>
        <a href></a>
        <em class="xs">个人信息</em>
        <em class="script_1"></em>
      </li>
      <li>
        <a href></a>
        <em class="xs">购物车</em>
        <em class="script_2"></em>
      </li>
      <li>
        <a href></a>
        <em class="xs">联系客服</em>
        <em class="script_3"></em>
      </li>
      <li>
        <a href></a>
        <em class="xs">移动端</em>
        <em class="script_4"></em>
      </li>
      <li>
        <a href></a>
        <em class="xs">返回顶部</em>
        <em class="script_5"></em>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    window.onscroll = function() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= 500) {
        FixedRight.className = "show";
        FixedTop.className = "show";
      } else {
        FixedRight.className = "";
        FixedTop.className = "";
      }
    };
    // jq 右边边滚动效果
    $("#FixedRight ul li").hover(function() {
      var $li = $(this);
      var $em = $li.children(":last-child").prev();
      if ($em.css("opacity") == 0) {
        $em.css("opacity", 1);
      } else {
        $em.css("opacity", 0);
      }
    });
  }
};
</script>
<style scoped>
/* 右边滑动效果 */
@media (min-width: 1400px) {
  #FixedRight {
    width: 40px;
    height: 200px;
    background-color: #aaa;
    position: fixed;
    right: 16%;
    bottom: 60px;
    display: none;
  }
  #FixedRight.show {
    display: block;
  }
}
@media (min-width: 300px) and (max-width: 1400px) {
  #FixedRight {
    width: 40px;
    height: 200px;
    background-color: #aaa;
    position: fixed;
    right: 0;
    bottom: 60px;
    display: none;
  }
  #FixedRight.show {
    display: block;
  }
}
#FixedRight ul li :last-child {
  display: block;
  width: 40px;
  height: 40px;
  background: url(http://127.0.1:5050/img/index/sprite_toolbar_new.png);
  background-position: 0px 0px;
  cursor: pointer;
}
#FixedRight ul li em.script_2 {
  background-position: 0px -42px;
}
#FixedRight ul li em.script_3 {
  background-position: 0px 159px;
}
#FixedRight ul li em.script_4 {
  background-position: 0px 79px;
}
#FixedRight ul li em.script_5 {
  background-position: 0px 40px;
}

#FixedRight ul li :nth-child(2) {
  display: block;
  width: 110px;
  height: 40px;
  background-color: #666;
  font-style: normal;
  font-size: 12px;
  line-height: 40px;
  position: absolute;
  right: 0px;
  z-index: -1;
  padding-left: 5px;
  opacity: 0;
  color: #fff;
}
</style>