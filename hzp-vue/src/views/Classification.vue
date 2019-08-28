<template>
  <div>
    <top></top>
    <toph></toph>
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>搜索结果</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="classifi">
        <el-collapse accordion>
          <div class="hei_100"></div>
          <el-collapse-item>
            <template slot="title">
              <div class="brand_flex">
                <p>品牌</p>
                <ul class="imgs">
                  <li>
                    <img :src="url+'img/index/dior_144X60.png'" alt />
                  </li>
                  <li>
                    <img :src="url+'img/index/dior_144X60.png'" alt />
                  </li>
                  <li>
                    <img :src="url+'img/index/dior_144X60.png'" alt />
                  </li>
                  <li>
                    <img :src="url+'img/index/dior_144X60.png'" alt />
                  </li>
                  <li>
                    <img :src="url+'img/index/dior_144X60.png'" alt />
                  </li>
                  <li>
                    <img :src="url+'img/index/dior_144X60.png'" alt />
                  </li>
                </ul>
              </div>
            </template>
            <div class="brand_list">
              <ul class="">
                  <li>
                    <img :src="url+'img/index/dior_144X60.png'" alt />
                  </li>
                  <li>
                    <img :src="url+'img/index/dior_144X60.png'" alt />
                  </li>
                  <li>
                    <img :src="url+'img/index/dior_144X60.png'" alt />
                  </li>
                  <li>
                    <img :src="url+'img/index/dior_144X60.png'" alt />
                  </li>
                  <li>
                    <img :src="url+'img/index/dior_144X60.png'" alt />
                  </li>
                  <li>
                    <img :src="url+'img/index/dior_144X60.png'" alt />
                  </li>
                </ul>
            </div>
          </el-collapse-item>
          <el-collapse-item title="分类" class="title_0">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="适用人群" class="title_0">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="功效" class="title_0">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "http://127.0.0.1:5050/"
    };
  }
};
</script>
<style >
.breadcrumb {
  width: 100%;
}
.bread {
  width: 1190px;
  margin: 0 auto;
  padding: 15px 0;
  border-bottom: 1px solid #999;
}
.classifi {
  width: 1190px;
  margin: 0 auto;
  position: relative;
}
/* 品牌 */
.hei_100 {
  height: 40px !important;
}
.classifi p {
  position: absolute;
  top: 5px;
  left: 10px;
  font-weight: bold;
}
.el-collapse-item__header {
  font-weight: bold !important;
  font-size:15px !important;
}
ul.imgs li {
  height: 20px;
  width: 100px;
  float: left;
  margin-left: 29px;
}
ul.imgs li img {
  border: 1px solid #999;
  width: 130px !important;
  height: 53px !important;
  position: absolute;
  top: 22px;
  margin-left:100px;
}
/* 更多的品牌 */
.brand_list{
    margin-left:100px;
    height:150px;
}
.brand_list ul li{
    float:left;
    margin-left: -1px;
    /* position: absolute; */
    /* top:74px;
    margin-left:29px; */
    
}
.brand_list img{
  border: 1px solid #999;
  width: 130px !important;
  height: 53px !important;
  position: absolute;
  top:74px;
  /* margin-left:29px; */
}
</style>