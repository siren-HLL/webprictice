/*p1-加载页：进度条及跳转*/
var jindu={
    init:function(){
        var jiazai=document.getElementById('jiazai');
        var count=0;
        var timer=setInterval(function(e){//间歇调用
            count++;
            jiazai.innerHTML=count+'%';
            if(count===100){
				clearInterval(timer);//清除间歇调用
				setTimeout("javascript:location.href='p2.html'", 1000);}//超时调用，多久后弹出p2
        },100);//10s>100% --> 1%>100ms
    }
};/*间歇时间值是指每隔指定的时间就执行一次代码。要执行的代码和以毫秒表示的时间（代码执行前的等待时间）*/

/*p2：音乐按钮*/
function mplay(){ 
var bgm=document.getElementById('bgm');
var yinf=document.getElementById('yinf');
if (bgm.paused){//如果停止
     bgm.play();
	 yinf.src="img/yinfu.png";
	 yinf.classList.add("yinfzh");}//点击后播放,音符图标为播放
else{
    bgm.pause();
	yinf.classList.remove("yinfzh");
	yinf.src="img/yinfuguanbi.png";}
}

/*p4：验证名字*/
var zhengze = /[^\u4e00-\u9fa5]/; /*至少匹配一个汉字的写法。2、这两个unicode值正好是Unicode表中的汉字的头和尾。3、"[]"代表里边的值出现一个就可以，后边的“+”代表至少出现1次，合起来即至少匹配*/ 
 function namevf(){ //验证名字函数
	var getname=document.getElementById('xingm');
	if((zhengze.test(getname.value))||(getname.value.length<2||getname.value.length>4)){
	  	alert("请输入2~4个汉字作为昵称");
	  	getname.value="";}
	return true;
}
/*test() 方法是一个正则表达式方法。
test() 方法用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。*/
function suan(){   
	var getName= document.getElementById('xingm');
	var getWork=document.getElementById('work');
	if((zhengze.test(getName.value))||(getName.value.length<2||getName.value.length>4)){
	  	alert("请输入2~4个汉字作为昵称");
	  	getName.value="";}
	else{
		if(getWork.value=='1'){
			location.href="p5-2.html?"+'txt=' + encodeURI(getName.value);}
		if(getWork.value=='2'){
			location.href="p5-1.html?"+'txt=' + encodeURI(getName.value);}
	}
}

/*p5*/
var loc = location.href;   //获取p4传递的东西
var n1 = loc.length;
var n2 = loc.indexOf('=');//等号下标
var txt = decodeURI(loc.substr(n2+1,n1-n2));  /*解码，保存姓名substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符start,length*/
var jis=0;    //计数
var leijia=0; //累加结果
var huanc=0;  //临时存储计算表达 式
var qianyg=0;  //记录前一个单击图片的ID号
var fuzhuxian=0;	 //单击图片的健康数值
var dengji="优";    //健康等级
var jiaflag=0;     //是否有需要累加的数据？？？
if((zhengze.test(txt)))
txt="张三";
function jiayuansu(qy)//计算已点击的图片值，按键响应？？
{   var start=document.getElementById("start");
	var self1 = event.currentTarget; //返回绑定事件的元素，响应点击  currentTarget 事件属性返回其监听器触发事件的节点，即当前处理该事件的元素、文档或窗口。
	if(self1.style.opacity !="0" && jis<3)
	{	jiaflag=1;
	    fuzhuxian=100;
		cplay();//点击音效
		if(qianyg!=0)//点击后新图片后，前一个点击的图片opacity变为1还原？？？作用是什么
	      {document.getElementById("img"+qianyg).style.opacity=1;}//不透明
		self1.style.opacity=0;//当前图片点击后，下层图片浮起
		if (self1.className=='wushi')//50数值
		{    fuzhuxian=50;}	   
		if(jis==0)
		{	start.style.backgroundImage='url("img.png")';//计数为0时，点击按钮后撤掉开始计算的图片
		 	start.innerHTML=fuzhuxian;}//屏幕显示第一个点击的数值
		else
			 start.innerHTML=huanc+'+'+fuzhuxian;//计数不为0，即已经开始相加后显示屏上继续相加
		qianyg=qy;
	}	
}
 function jiafafu(){
    if(qianyg!=0 && jis<3){
 	leijia=leijia+fuzhuxian;//sum=sum+score
 	jis++;//count++
 	huanc=start.innerHTML;//显示屏上显示算式
 	qianyg=0;//重置，qianyig赋值为0,控制77行
 	jiaflag=0;
	cplay();
	jiahchange();}//怎么换回来？？
 }
function denghaoyubaogao()//等号报告的切换
{var dengh=document.getElementById("denghao");
if( fuzhuxian!=0)//点击图片开始计算后
{
 if(dengh.style.opacity=="0")//等号被按下去，变为健康报告
  baogao(); 
else
    denghao();//计算，评定等级
}}
function denghao()//等级评定
 {var dengh=document.getElementById("denghao");
 cplay();
    if(jis<4)
 	{   jis=4;//？？？？？？？？
 		if(jiaflag==1)
 			leijia=leijia+fuzhuxian;
 			{if(leijia>250)
           {        dengji="优";
       bgdisc.style.backgroundImage='url("img/youxiu.png")';}
else
     if(leijia>200)
	{bgdisc.style.backgroundImage='url("img/lianghao.png")';
      	 dengji="良";}
     else
        	dengji="差";}
 		start.innerHTML=start.innerHTML+'='+leijia+'<br/>'+dengji;//打印
          dengh.style.opacity="0";}//等号被按下，图片变动
 		
 	
 }
function baogao(){//报告内容
	var heibg=document.getElementById("heibg"); 
	var bgname=document.getElementById("bgname");
	var bgscore=document.getElementById("bgscore");
	var bgdengj=document.getElementById("bggrade");
	var bgmiaos=document.getElementById("bgdisc");
	bgname.innerHTML=txt;
	bgscore.innerHTML=leijia+'分';
	bggrade.innerHTML=dengji;
	heibg.style.display="block";
	bgname.style.display="block";
	bgscore.style.display="block";
	bggrade.style.display="block";
	bgdisc.style.display="block";
}
function cplay(){ 
	var clickm=document.getElementById('clickm');
	clickm.play();
}
function jiahchange(){
	var jaih1=document.getElementById('jiah1');
	jiah1.classList.remove("jiah1");
	jiah1.src="img/jia2.png";
}

//返回信息页面
function return_jisuan(){
	window.location="p4.html";
	document.getElementById("xingm")="";
	document.getElementById("work")="";
}