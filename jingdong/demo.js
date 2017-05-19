
//秒杀
var hourele=document.querySelector(".hour");
// console.log(hours);
var minuteele=document.querySelector(".minute")
var secondele=document.querySelector(".second");
function getTime(){
    var now=new Date();
    var after=new Date(2017,4,20,0,0,0);
    var cha=after.getTime()-now.getTime();
    var hour=Math.floor(cha/(1000*60*60));
    hourele.innerHTML=hour<10?"0"+hour:hour;
    var minute=Math.floor(cha/(1000*60)%60);
    minuteele.innerHTML=minute<10?"0"+minute:minute;
    var second=Math.floor(cha/1000%60);
    secondele.innerHTML=second<10?"0"+second:second;
}
getTime();
setInterval(getTime,1000)
