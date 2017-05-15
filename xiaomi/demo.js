//banner蓝轮播
var lunboall=document.querySelectorAll(".h1b .dian");
var bnall=document.querySelectorAll(".bn a");
var box=document.querySelector(".cr");
var prev=document.querySelector(".cr .hll");
var next=document.querySelector(".cr .hlr");
var obj=lunboall[0];
var bnobj=bnall[0];
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
        num=lunboall.length-1;//赋值
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
next.onmouseover=function () {
    next.style.opacity=1;
}
next.onmouseout=function () {
    next.style.opacity=0;
}
prev.onmouseover=function () {
    prev.style.opacity=1;
}
prev.onmouseout=function () {
    prev.style.opacity=0;
}
next.onclick=function () {
    move();
}
prev.onclick=function () {
    num-=2;
    move();
}
//单品栏
    var  innersingle = document.querySelector(".danpinlan ul");
    var prev1=document.querySelector(".z");
    var next1=document.querySelector(".y");
    console.log(prev1,next1)
    // console.log(box)
    var single= setInterval(singlemove, 1000);
    var num1 = 0;
    function singlemove() {
        innersingle.style.transition = "all 0.5s";
        num1++;
        next1.style.color="black";
        innersingle.style.marginLeft = -1250 + "px";
        prev1.style.color="";
        if (num1 ==1) {
            next1.style.color="";
            prev1.style.color="black";
            innersingle.style.marginLeft = 0;
        }
    }
  prev1.onmouseover=function () {
      if(num1==1){
        prev1.style.color="#ff6700";
      }
}
   next1.onmouseover=function () {
    if(num1==0){
        next1.style.color="#ff6700";
    }
}
    prev1.onclick=function () {
        singlemove()

    }
  next.onclick=function () {
     singlemove()
  }
//导航侧栏
var asl=document.querySelectorAll(".as .asl");
var secindex=document.querySelectorAll(".asidesec");
console.log(asl,secindex);
Array.from(asl).forEach(function (v,i) {
    asl[i].onmouseover=function () {
        secindex[i].style.display="block";
    }
    asl[i].onmouseout=function () {
        secindex[i].style.display="none";
    }
})
