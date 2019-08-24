<template>
  <div>
    <div class="bottom-b">
      <div class="bottom-b-m">
        <ul>
          <li class="p-t">
            <img :src="url+'img/footer/footer-redords-icon.png'" alt />
            <a href="#"> 沪公网安备 31010602003121号</a>
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
    </div>
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
@import url("../assets/css/bottom.css");
</style>