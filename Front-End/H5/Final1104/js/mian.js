/*p1*/
var jindu = {
	init: function(){
		var jindutiao = document.getElementById("jindutiao");
		var count = 0;
		var timer = setInterval(function(e){
			count++;
			jindutiao.innerHTML = count + "%";
			if(count == 100){
				clearInterval(timer);
				setTimeout("javascript:window.location.href='main.html'",1000);
			}
		},100);
	}
}

/*p2*/
function mplay(){
	var bgm = document.getElementById("bgm");
	var yinfu = document.getElementById("music");
	if(bgm.paused){
		bgm.play();
		yinfu.style.animationPlayState = "running";
	}else{
		bgm.pause();
		yinfu.style.animationPlayState = "paused";
	}
}
// function tiaozhuanp3(){
// 	window.location.href='p3-1.html';
// }

/*p3*/
function an1 () {
//alert("按钮成功！")
document.getElementById("faguang1").style.display="block"
document.getElementById("faguang2").style.display="none"
document.getElementById("faguang3").style.display="none"
document.getElementById("text1").style.display="block"
document.getElementById("text2").style.display="none"
document.getElementById("text3").style.display="none"
document.getElementById("yangtu1").style.display="block"
document.getElementById("yangtu2").style.display="none"
document.getElementById("yangtu3").style.display="none"

}
function an2 () {
//alert("按钮成功！")
document.getElementById("faguang2").style.display="block"
document.getElementById("faguang1").style.display="none"
document.getElementById("faguang3").style.display="none"
document.getElementById("text1").style.display="none"
document.getElementById("text2").style.display="block"
document.getElementById("text3").style.display="none"
document.getElementById("yangtu2").style.display="block"
document.getElementById("yangtu1").style.display="none"
document.getElementById("yangtu2").style.top="100px"
document.getElementById("yangtu3").style.display="none"

}
function an3 () {
//alert("按钮成功！")
document.getElementById("faguang3").style.display="block"
document.getElementById("faguang2").style.display="none"
document.getElementById("faguang1").style.display="none"
document.getElementById("text1").style.display="none"
document.getElementById("text2").style.display="none"
document.getElementById("text3").style.display="block"
document.getElementById("yangtu3").style.display="block"
document.getElementById("yangtu2").style.display="none"
document.getElementById("yangtu1").style.display="none"
}