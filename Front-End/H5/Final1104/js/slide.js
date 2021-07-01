document.documentElement.addEventListener("touchstart",touchStart);//事件名记得小写
document.documentElement.addEventListener("touchend",touchEnd);

var pagebox = document.getElementsByClassName("pagebox")[0];
var startX = "";
var startY = "";
var endX = "";
var endY = "";

function touchStart(e){
	startX = e.touches[0].pageX;
	startY = e.touches[0].pageY;
}
function touchEnd(e){
	endX = e.changedTouches[0].pageX;
	endY = e.changedTouches[0].pageY;
	touchMove();
}
function touchMove(){
	var move = (startY - endY);
	if(Math.abs(move)>100){
		if(move>0){
			pageMove("later");
		}else{
			pageMove("fronter");
		}
	}
}

var index = 1;
var position = 0;
var moveD = 520;

function pageMove(a){
	if(a == "fronter" && index == 1)return
	if(a == "later" && index == 3)return
	if(a == "fronter"){
		index-- ;
		position += moveD;
	}
	if(a == "later"){
		index++ ;
		position -= moveD;
	}
	pagebox.style.transform = "translate(0,"+position+"px)";
}

/*跳转*/
function tiaozhuanp3(){//p2->p3
	index=2;
	pagebox.style.transform = 'translate(0,'+(-(moveD))+'px)';//基于第二页的pagebox的原始位置
	position -= moveD;
}
function tiaozhuanp4(){//p3->p4
	index=3;
	position -= moveD;
	pagebox.style.transform = 'translate(0,'+-(moveD*2)+'px)';
}
function tiaozhuan3(){//p4->p3
	index=2;
	pagebox.style.transform = 'translate(0,'+-(moveD)+'px)';
	position += moveD;
}
