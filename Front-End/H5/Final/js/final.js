/*p1进度条*/
var jindu = {
	init:function(){
		var jindutiao = document.getElementById("jindutiao");
		var count = 0 ;
		var timer = setInterval(function(e){
			count++;
			jindutiao.innerHTML=count+"%";
			if(count == 100){
				clearInterval(timer);
				setTimeout("javascript:location.href='p2.html'",1000);
			}
		},100);
	}
}

/*p2音乐播放*/
function mplay(){
	var bgm = document.getElementById("bgm");
	var yinfu = document.getElementById("music");
	if(bgm.paused){
		bgm.play();
		yinfu.style.animationPlayState='running';
	}else{
		bgm.pause();
		yinfu.style.animationPlayState='paused';
	}
}
function tiaozhuan3(){//跳转至p3-1,p2\p4用
	window.location.href="p3-1.html";
}

/*p3*/
function tiaozhuan4(){//跳转至p4
	window.location.href="p4.html";
}

/*var x=document.querySelector("#shine1");
var y=document.querySelector("#shine2");
var z=document.querySelector("#shine3");*/
function anniu1(){
	window.location.href="p3-1.html";
}
function anniu2(){
	window.location.href="p3-2.html";
}
function anniu3(){
	window.location.href="p3-3.html";
}





document.documentElement.addEventListener("touchstart",touchStartEvent)
document.documentElement.addEventListener("touchend",touchEndEvent)

var pagesBox = document.getElementsByClassName("pages-box")[0];
console.log(pagesBox);
var startX = "";
var	startY = "";
var	endX = "";
var	endY = "";

function touchStartEvent(e){
	startX = e.touches[0].pageX;
	startY = e.touches[0].pageY;
}
function touchEndEvent(e){
	endX = e.changedTouches[0].pageX;
	endY = e.changedTouches[0].pageY;
	touchMove()
}

function touchMove(){
	var movejl = (startY-endY)
	if(Math.abs(movejl)>100){
		if (movejl>0) {
			//从下向上动了——下一页
			pageMove("down")
		} else{
			//从上往下动了——上一页
			pageMove("up")
		}
	}
}

var index = 1;
var position = 0;
var MoveD = 520;

function pageMove(fx){
	if(fx == "up" && index == 1)return
	if(fx == "down" && index == 3)return
	if(fx == "up"){
		position += MoveD;
		index--;
	}
	if (fx == "down"){
		position -= MoveD;
		index++;
	}
	pagesBox.style.transform = 'translate(0,'+position+'px)'
}
