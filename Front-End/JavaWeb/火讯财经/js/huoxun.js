/*顶部轮播图切换#headerBanner*/
var headerBannerBg = document.getElementById("hbWrap");
var headerBannerPre = document.getElementById("headerBannerPre");
var headerBannerNext = document.getElementById("headerBannerNext");
var headerBannerText = document.getElementById("headerBannerText");
var headerBannerTitle = document.getElementById("headerBannerTitle");
var headerBannerIndex = 1;

headerBannerNext.onclick = function(){//下一张图片
	headerBannerIndex++;
	if(headerBannerIndex == 4){
		headerBannerIndex=1;
	}
	headerBannerBg.src="images/hbbg"+headerBannerIndex+".png";
	changeTextColor();
}
headerBannerPre.onclick = function(){//上一张图片
	headerBannerIndex--;
	if(headerBannerIndex == 0){
		headerBannerIndex=3;
	}
	headerBannerBg.src="images/hbbg"+headerBannerIndex+".png";
	changeTextColor();
}
function changeTextColor(){//headerBanner文字部分换色
	if(headerBannerIndex == 2 || headerBannerIndex==3){
		headerBannerText.className = "textchange";
		headerBannerTitle.style.color = "red";//标题换色
	}else if(headerBannerIndex==1){
		headerBannerText.className = "textchange1";
		headerBannerTitle.style.color = "#FFFDEF";
	}
}


$(document).ready(function(){
	/*内容板块一：业务范围（类选项卡)#workRange*/
	$("#workRangeNav>li").click(function(){
		$(this).parent("ul").children("li").removeClass("workRangeOn");
		$(this).addClass("workRangeOn");
		var index = $(this).index();
		$("#workRangeBox>div").hide();
		$("#workRangeBox>div").eq(index).show();
	});
	
	/*内容板块三：产业智库（类选项卡)#ideaBank*/
	$("#ideaBankNav>li").click(function(){
		$(this).parent("ul").children("li").removeClass("ideaBankOn");
		$(this).addClass("ideaBankOn");
		var index = $(this).index();
		$("#ideaBankBox>div").hide();
		$("#ideaBankBox>div").eq(index).show();
	});
	
	
	/*测试部分>内容板块三：精选案例（可删)*/
	//$("#examplePage2 div").css("border","black 1px solid");
	//$("#examplePage3 div").css("border","black 1px solid");
})


/*内容板块三：精选案例(轮播图)*/
var exampleBox = document.getElementById("exampleBox");
var exampleLis = exampleBox.getElementsByTagName("li");
var exampleBot = document.getElementById("exampleBot");
var exampleSpans = exampleBot.getElementsByTagName("span");
var exampleNo = 0;//计数

function example_show_pic(){//图片轮播
	for(var i=0; i< exampleLis.length; i++){//遍历隐藏图片
		exampleLis[i].style.display = "none";
		exampleSpans[i].className = "";
	}
	exampleNo ++;//显示图片
	if(exampleNo == 3){
		exampleNo = 0;
	}
	exampleLis[exampleNo].style = "block";
	exampleSpans[exampleNo].className = "exampleOn";
}
var exampleIntervar = setInterval("example_show_pic()",1500);

function example_current(index){//鼠标移至下标，切换
	clearInterval(exampleIntervar);
	for(var i=0; i< exampleLis.length; i++){
		exampleLis[i].style.display = "none";
		exampleSpans[i].className = "";
	}
	exampleLis[index-1].style.display ="block";
	exampleSpans[index-1].className = "exampleOn";//下标样式显示
	exampleNo = index-1;//对应的图片显示要重新计数
}
function carousel_goon(){//鼠标移开，定时器继续运行
	exampleIntervar = setInterval("example_show_pic()",1500);
}

