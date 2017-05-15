//图片轮播
var lunboall=document.querySelectorAll(".dibu .dian");
var bnall=document.querySelectorAll(".bn a");
var box=document.querySelector(".dx");
var obj=lunboall[0];
var bnobj=bnall[0];
var prev=document.querySelector(".banner .left");//左右箭头
var next=document.querySelector(".banner .right");//左右箭头
Array.from(lunboall).forEach(function (ele,index) {
    ele.onmouseover=function () {
        num=index;
        obj.style.background="gray";
        lunboall[index].style.background="#a10000";
        obj=lunboall[index];
        bnobj.style.opacity=0;
        bnobj.style.zIndex=1;
        bnall[index].style.opacity=1;
        bnall[index].style.zIndex=2;
        bnobj=bnall[index];
    }
})
var r=setInterval(move,2000);
var num=0;
function move() {
    num++;
    if(num==lunboall.length){
        num=0;
    }
    if(num==-1){
        num=lunboall.length-1;
    }
    obj.style.background="gray";
    lunboall[num].style.background="#a10000";
    obj=lunboall[num];
    bnobj.style.opacity=0;
    bnobj.style.zIndex=4;
    bnall[num].style.opacity=1;
    bnall[num].style.zIndex=5;
    bnobj=bnall[num];
}
box.onmouseover=function () {
    clearInterval(r);
}
box.onmouseout=function () {
    r=setInterval(move,2000);
}
prev.onclick=function () {//左右箭头
    num-=2;
    move();
}
next.onclick=function () {//左右箭头
    move();
}

//二级导航
var lists=document.querySelectorAll(" nav .lists>li");
var seclists=document.querySelectorAll(".seclists");
var arrz=[];
Array.from(seclists).forEach(function (ez,indexz) {
    var secli=ez.querySelectorAll("li");
    var height=secli.length*30-20;
    arrz.push(height);
    lists[indexz].onmouseover=function () {
        seclists[indexz].style.height=arrz[indexz]+"px";
    }
    lists[indexz].onmouseout=function () {
        seclists[indexz].style.height=0;
    }
})
//微信二级
var w1=document.querySelector(".w1 a");
var wChart=document.querySelector(".wx");
var wChartz=document.querySelector(".wx .w");
var height=25;
var width=-130;
w1.onmouseover=function () {
    wChart.style.height=height+"px";
    wChart.style.width=width+"px";
    wChart.style.display="block";
}
w1.onmouseout=function () {
    wChart.style.height=0;
    wChart.style.width=0;
    wChart.style.display="none";
}
//购物车
var gwc=document.querySelector(".gwc");
var secgwc=document.querySelector(".sec");
gwc.onmouseover=function () {
   secgwc.style.display="block";
}
gwc.onmouseout=function () {
    secgwc.style.display="none";
}
//回到顶部
var fix=document.querySelector(".fix");
fix.onclick=function () {
  animate(document.body,{scrollTop:0},500)
}
