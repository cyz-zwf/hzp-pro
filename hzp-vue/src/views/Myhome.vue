<template>
  <div class="myhome">
    <top></top>
    <toph></toph>
    <div class="myhome-body">
      <div class="myhome-box">
        <div class="myhome_r_title">我的cyz&zhu</div>
        <div class="myhome-right">
          <div class="Management">
            <ul>
              <li>
                 <h4>交易管理</h4>
                 <ul class="Transaction">
                   <li>我的订单</li>
                   <li>我的优惠卷</li>
                   <li></li>
                 </ul>
              </li>
              <li>
                <h4>个人信息管理</h4>
                <ul class="Personal">
                   <li>编辑个人资料</li>
                   <li>收货地址管理</li>
                   <li>更改密码</li>
                 </ul>
              </li>
            </ul>
          </div>
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
}
/* 右边 */
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
/* Management */
.Management{
  width:180px;
  margin-top:20px;
    font-size:14px;
}
.Management li{
  margin-top:5px;
}
.Transaction,.Personal{
  margin-left:20px;
}
.Transaction li:hover,.Personal li:hover{
  color:#f00;
  cursor: pointer;
}
/* 左边 */
.myhome-box div.myhome-left{
    width: 950px;
    height:1024px;
    border:1px solid #000;

}
</style>