class Draw{
    constructor(cobj,option){
        this.cobj=cobj;
        this.color=option.color;
        this.width=option.width;
        this.style=option.style;
    }
    init(){
        this.cobj.strokeStyle=this.color;
        this.cobj.fillStyle=this.color;
        this.cobj.lineWidth=this.width;
    }
    rect(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        this.cobj.rect(ox,oy,mx-ox,my-oy);
        this.cobj[this.style]();
        // this.cobj.strokeRect(ox,oy,mx-ox,my-oy);
    }
    line(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        this.cobj.moveTo(ox,oy);
        this.cobj.lineTo(mx,my);
        this.cobj.stroke();
    }
    //内切圆
    circleIn(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        var r=Math.abs(mx-ox)>Math.abs(my-oy)?Math.abs(my-oy)/2:Math.abs(mx-ox)/2;//绝对值
        this.cobj.arc(ox+(mx>ox?r:-r),oy+(my>oy?r:-r),r,0,2*Math.PI);
        this.cobj[this.style]();
    }
    //外接圆
    circleOut(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        var r=Math.sqrt(Math.pow(my-oy,2)/2+Math.pow(mx-ox,2))/2;//sqrt:开根号 pow 平方
        this.cobj.arc(ox+(mx-ox)/2,oy+(my-oy)/2,r,0,2*Math.PI);
        this.cobj[this.style]();
    }
    //中心圆
    circlecenter(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        var r=Math.sqrt(Math.pow(my-oy,2)+Math.pow(mx-ox,2));
        this.cobj.arc(ox,oy,r,0,2*Math.PI);
        this.cobj[this.style]();
    }
    //正多边形
    poly(ox,oy,mx,my,s){
        this.init();
        this.cobj.save();
        cobj.translate(ox,oy);
        this.cobj.rotate(Math.PI/2);
        var angle=Math.PI/s;
        var r=Math.sqrt(Math.pow(my-oy,2)+Math.pow(mx-ox,2));
        var x=Math.cos(angle)*r;
        var y=Math.sin(angle)*r;
        this.cobj.beginPath();
        this.cobj.moveTo(x,y);
        for(var i=0;i<s;i++){
           this. cobj.lineTo(x,-y);
           this. cobj.rotate(-angle*2);
        }
        this.cobj[this.style]();
        this.cobj.restore();
    }
    //铅笔
    pen(ox,oy,mx,my){
        this.init();
        this.cobj.lineTo(mx,my);
        this.cobj.stroke();
    }
    //橡皮
    eraser(ox,oy,mx,my){
        this.init();
        this.cobj.clearRect(mx,my,10,10);
        
    }
}