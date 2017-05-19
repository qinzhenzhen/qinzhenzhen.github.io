var bigpic=document.querySelectorAll(".huibo a ");//第一栏轮播
var smallpic=document.querySelectorAll(".xiaotu a");
var smallspic=document.querySelectorAll(".xiaotu li")
var masks=document.querySelectorAll(".mask");//第一栏小图遮罩
var left=document.querySelector(".lianzuo");
var rightall=document.querySelectorAll(".lianyou ul li");
var zhezhao=document.querySelectorAll(".juxing");
Array.from(smallpic).forEach(function (ele,index) {
    num=index;
    ele.onmouseover=function () {
        masks[index].style.display="block";//小图遮罩
       for(var i=0;i<smallpic.length;i++){
          bigpic[i].style.display="none";
       }
        bigpic[index].style.display="block";
    }
    ele.onmouseout=function () {
        masks[index].style.display="none";//小图遮罩
    }
   }
);
//字体轮播
Array.from(smallspic).forEach(function (ele,index) {
        ele.onmouseover=function () {
            masks[index].style.display="block";//小图遮罩
        }
        ele.onmouseout=function () {
            masks[index].style.display="none";//小图遮罩
        }
    }
);
var inners=document.querySelector(".inner");
var num11=0;
setInterval(function () {
    if(num11==0){
        inners.style.transition="all 1s";
    }
     num11++;
     inners.style.marginTop=-70*num11+"px";
},3000)
inners.addEventListener("transitionend",function () {
//添加事件
    if(num11==3){
         inners.style.transition="none";
         inners.style.marginTop=0;
         num11=0;
     }
})
//左右箭头轮播
var prev=document.querySelector(".xiaotu .left");
var next=document.querySelector(".xiaotu .right");
var xiaotuall=document.querySelector(".xiaotu ul");
var num3=0;
next.onclick=function(){
    prev.style.display = "block";
    xiaotuall.style.marginLeft=-488+"px";
    next.style.display = "none";
}
prev.onclick=function(){
    xiaotuall.style.marginLeft=0;
    next.style.display = "block";
    prev.style.display = "none";
}
//楼层出现、跳转
var leftfix=document.querySelector(".fix");
var lfl=document.querySelectorAll(".fix li")
var floors=document.querySelectorAll(".floor");
//滑动浏览器到一定高度时搜索栏出现
var topbar=document.querySelector(".topbar");
window.onscroll=function () {
    var h=document.body.scrollTop;
    if(h>1000){
        topbar.style.top=0;
    }else{
        topbar.style.top="-50px";
    }
    var fh=document.body.scrollTop;//获取高度
    if(fh>1000){
        leftfix.style.width="35px";
        leftfix.style.height="340px";
    }else{
        leftfix.style.width=0;
        leftfix.style.height=0;
    }
}
Array.from(lfl).forEach(function (li,fi) {
    var lfh=floors[fi].offsetTop;//获取主楼层的高度
    li.onclick=function () {//点击左面楼层
     animate(document.body,{scrollTop:lfh},500) //将主楼层的高度赋值给浏览器
    }
})
//回到顶部
var totop=document.querySelector(".fix .top");
totop.onclick=function () {
    animate(document.body,{scrollTop:0},500)
}
var num=0;
var t=setInterval(move,1000);
function move() {
    num++;
    if(num==smallpic.length){
        num=0;
    }
    for(var i=0;i<smallpic.length;i++){
        bigpic[i].style.display="none";
    }
        bigpic[num].style.display="block";
}
left.onmouseover=function () {
    clearInterval(t);
};
left.onmouseout=function () {
    t=setInterval(move,1000);
};
Array.from(rightall).forEach(function (value,index) {
    value.onmouseover=function () {
        //zhezhao[index].style.display="block";
        zhezhao[index].style.opacity=1;
    }
    value.onmouseout=function () {
        //zhezhao[index].style.display="none";
        zhezhao[index].style.opacity=0;
    }
});
//小猫头像
var bnys=document.querySelectorAll(".bny a");
var cats=document.querySelectorAll(".bny a img");
// console.log(cats)
Array.from(bnys).forEach(function (v,i) {
    v.onmouseover=function () {
        cats[i].style.opacity=1;
        cats[i].style.top="-15"+"px";
    }
    v.onmouseout=function () {
        cats[i].style.opacity=0;
        cats[i].style.top="0"+"px";
    }
})
//头部二级导航
var hindexs=document.querySelectorAll(".r #hindex");
var hsecs=document.querySelectorAll("#hsec");
Array.from(hsecs).forEach(function (hsec,index) {
   hindexs[index].onmouseover=function () {
       hsec.style.display="block";
   }
    hindexs[index].onmouseout=function () {
        hsec.style.display="none";
    }
})
//侧栏出现二级导航
var indexnav=document.querySelectorAll("aside .asnav .anav")
var bigbnbox=document.querySelector(".banners ");
var secnav=document.querySelectorAll("aside ul li .asidesec")
Array.from(indexnav).forEach(function (asideele,index5) {
    asideele.onmouseover=function (elzz) {
        secnav[index5].style.display="block";
    }
    asideele.onmouseout=function () {
        secnav[index5].style.display="none";
    }
})
   