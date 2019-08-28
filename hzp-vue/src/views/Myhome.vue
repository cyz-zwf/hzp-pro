<template>
  <div class="myhome">
    <top></top>
    <toph></toph>
    <div class="myhome-body">
      <div class="myhome-box">
        <div class="myhome_r_title">我的cyz&zhu</div>
        <div class="myhome-right">
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
        <div class="myhome-left">
            <div class="myhome-l-title">我的cyz&zhu</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          label: "交易管理",
          children: [
            {
              label: "我的订单",
              children: [
                {
                  label: "我的优惠券"
                }
              ]
            }
          ]
        },
        {
          label: "个人信息管理",
          children: [
            {
              label: "编辑个人资料",
              children: [
                {
                  label: "收件地址管理"
                }
              ]
            },
            {
              label: "更改密码",
              children: [
                {
                  label: ""
                }
              ]
            }
          ]
        },
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>
<style scoped>
.myhome-box {
  width: 100%;
}
.myhome-box {
  width: 1190px;
  margin: 0 auto;
  display:flex;
}
.myhome-right {
  width: 240px;
  height: 1024px;
  border-right: 1px solid #999;
  margin-top: 5px;
}
.myhome_r_title {
  width: 180px;
  height: 40px;
  border-bottom: 1px solid #000;
  margin-top: 36px;
}
.myhome-box div.myhome-left{
    width: 950px;
    height:1024px;
    border:1px solid #000;

}
</style>