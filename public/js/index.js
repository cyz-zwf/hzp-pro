var i =0;//现在正在显示第几张图片，从0开始
var liwidth=1190; //每个li的固定宽度
var duration=500; //每次轮播动画持续的时间
var licount=3; //li的总个数
//要移动的ul
var ulimage=document.getElementsByClassName("ul-imgs")[0];
//包含小圆点列表的ul
var ulidx=document.getElementsByClassName("ul_idx")[0];
var lis=ulidx.children;//小圆点的元素列表
//从当前位置移动到任意一个范围内的位置
function moto(to){
    if(to==undefined){
        //如果用户没有传入要跳到第几张图，就默认跳到当前图的下一个张
        to=i+1;
    }
    if(i==0){
        if(to>i){ //如果要看当前位置右边的图片，是不会出问题的
            ulimage.style.transition="transition";
        }else{//只有i=0在开头，且还要看左边的图片时，才会出问题
            //为了避免用户再次看到偷梁换柱的效果，先把transition class去掉
            ulimage.style.transition="";
            //将ulImgs拉取到最左侧
            ulimage.style.marginLeft=-liwidth*licount+"px";
            //定时器是为了将偷梁换柱操作和加回transition属性的操作强行隔离开
            setTimeout(function(){
                moto(licount-1);
            },100);
            return ;
        }
    }
    i=to;//先将表示第几张图片的变量i变为目标位置
    //再用i计算ulimgs的marginLeft距离
    ulimage.style.marginLeft=-i*liwidth+"px";
    //先删除所有小圆点的class
    for(var li of lis){
        li.className="";
       
    }
    //console.log(i);
    //当transition动画播放完之后，才
    if(i==licount){
        i=0;
        setTimeout(function(){
            ulimage.style.transition="";//清掉transition属性

            ulimage.style.marginLeft=0;//将ulImgs拉回0位置
        },duration)
    }
    // console.log(i);
    //再给当前位置的小圆点添加class active
    lis[i].className="active";
    lis[i].style.transition="transition";
}
//左右按钮
var btnLeft=document.getElementsByClassName("btn_left")[0];
var btnRight=document.getElementsByClassName("btn_right")[0];
var open=true;//用开关，控制，上次动画没有播放完，下次动画不能开始！
btnRight.onclick=function(){
    //调用两个按钮公共的移动方法，参数1表示移动到i+1的位置，相当于左移一个
    move(1)
}
//两个按钮共用的移动函数，n传入1时，移动到i+1位置，左移。n传入-1时，移动到i-1位置，右移
function move(n){
    if(open){//只有可以单击时
        //console.log(i+n);
        moto(i+n);//才调用真正移动ul的方法
        open=false;//马上把开关关上，禁止再次点击
        //只有本地transition动画播放完，才能自动打开开关，点击按钮才有反应。
        setTimeout(function(){
            open=true;
        } ,duration+100);
    }
}
btnLeft.onclick=function(){
    move(-1);
}
// 自动播放
var interval=3000;
var timer=setInterval(function(){
    moto()
},3000);
var banner=document.getElementsByClassName("banner")[0];
banner.onmouseover=function(){
    clearInterval(timer);
}
banner.onmouseout=function(){
    timer=setInterval(function(){
        moto()
    },3000)
}
//小圆点
var ulIdx=document.getElementsByClassName("ul_idx")[0];
//console.log(ulIdx);
var open=true;
ulIdx.onclick=function(e){
    if(open){
        var li=e.target;
        console.log(li.nodeName)
        if(li.nodeName=="LI"){
            if( li.style.active!=="active"){
                for(var i=0; i<lis.length;i++){
                    if(lis[i]==li){
                        break;
                    }
                }
                moto(i);
                setTimeout(function(){
                    open=true;
                },duration)
            }        
        }
    }  
}

