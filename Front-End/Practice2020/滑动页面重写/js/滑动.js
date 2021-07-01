document.documentElement.addEventListener("touchstart",touchStartEvent);
document.documentElement.addEventListener("touchend",touchEndEvent);

var pagesBox = document.getElementsByClassName("pages-box")[0];
//console.log(pagesBox);
var startX = "";
var	startY = "";
var	endX = "";
var	endY = "";

function touchStartEvent(e){
	startX = e.touches[0].pageX;//？
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
	if(fx == "up" && index == 1)return//顶端不往上
	if(fx == "down" && index == 3)return//底端不往下
	if(fx == "up"){
		position += MoveD;
		index--;//下一页
	}
	if (fx == "down"){
		position -= MoveD;
		index++;
	}
	pagesBox.style.transform = 'translate(0,'+position+'px)'
}

