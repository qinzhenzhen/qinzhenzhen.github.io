var bnbox=document.querySelector(".bnbox");//图片box
var imgs=document.querySelectorAll(".bnbox li");//图片所在的每一个box
var btns=document.querySelectorAll(".btn li");
var box=document.querySelector(".bn-m");
var prev=document.querySelector(".bn-m .prev");
var next=document.querySelector(".bn-m .next");
var num=0;//第几张图片
var z=5;//层级
var flag=true;
var t=setInterval(move,2000);
function move() {
    imgs[num].classList.add("leftOut");
    btns[num].classList.remove("active");
   num++;
   if(num==imgs.length){
       num=0;
   }
    imgs[num].classList.add("leftIn");
    btns[num].classList.add("active");
    imgs[num].style.zIndex=z++;
    flag=true;
}
imgs.forEach(function (img) {
    img.addEventListener("animationend",function () {
        img.className="";
        flag=true;
    })
})
box.onmouseover=function () {
    clearInterval(t);
}
box.onmouseout=function () {
    t=setInterval(move,2000)
}
Array.from(btns).forEach(function (btn,index) {
    btn.onclick=function () {
        if(index==num){
            return;
        }
        if(index>num){
            imgs[num].classList.add("leftOut");
            imgs[index].classList.add("leftIn");
            
        }else{
            imgs[num].classList.add("rightOut");
            imgs[index].classList.add("rightIn");
        }
        btns[num].classList.remove("active");
        btn.classList.add("active");
        imgs[index].style.zIndex=z++;
        num=index;
    }
})
next.onclick=function () {
   if(flag){
    move();
     flag=false;
   }
}
prev.onclick=function () {
    if(flag){
        imgs[num].classList.add("rightOut");
        btns[num].classList.remove("active");
        num--;
        if(num==-1){
            num=imgs.length-1;
        }
        imgs[num].classList.add("rightIn");
        btns[num].classList.add("active");
        imgs[num].style.zIndex=z++;
        flag=false;
    }
}
//banner下方图片轮播
var inner=document.querySelector(".lunbo .con-lun .pi .inner");
var box1=document.querySelector(".con-lun");
var prev1=document.querySelector(".con-lun .prev");
var next1=document.querySelector(".con-lun .next");
var num1=4;
var flagzz=true;
var set=setInterval(move1,2000);
function move1() {
    // if(num1==4||num1==6){
        inner.style.transition="all 1s";
    // }
    num1++;
    inner.style.marginLeft=-295*num1+"px";
}
inner.addEventListener("transitionend",function () {
      if(num1==12){
          inner.style.transition="none";
          num1=4;
          inner.style.marginLeft=-295*num1+"px";
      }else if(num1==0){
          inner.style.transition="none";//注意
          num1=8;
          inner.style.marginLeft=-295*num1+"px";
      }
    flagzz=true;
})
box1.onmouseover=function () {
    clearInterval(set)
}
box1.onmouseout=function () {
    set=setInterval(move1,2000)
}
next1.onclick=function () {
    if(flagzz){
        flagzz=false;
        move1();
    }
}
prev1.onclick=function () {
    if(flagzz){
        flagzz=false;
        num1-=2;
        move1();
    }
}
//在线咨询
var item1=document.querySelectorAll(".fix .l");
item1.forEach(function (item) {
    // console.log(item)
    item.onmouseover=function () {
        item.style.left=-85+"px";
    }
    item.onmouseout=function () {
        item.style.left=-22+"px";
    }
})
//二级菜单
 var lists=document.querySelectorAll(".nav-m  .index1 .index2");
 var seclists=document.querySelectorAll(".secn");
var listsh=document.querySelectorAll(".top-r  .index a");
var seclistsh=document.querySelectorAll(".top-r  .index a .sec");
// console.log(listsh)
Array.from(seclists).forEach(function (ez,indexz) {
        lists[indexz].onmouseover=function () {
         ez.style.display="block";
 }
         lists[indexz].onmouseout=function () {
             ez.style.display="none";
 }
})
Array.from(seclistsh).forEach(function (ezh,indexzh) {
    listsh[indexzh].onmouseover=function () {
        ezh.style.display="block";
    }
    listsh[indexzh].onmouseout=function () {
        ezh.style.display="none";
    }
})
//公告
