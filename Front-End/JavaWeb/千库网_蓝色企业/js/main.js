
$(document).ready(function(){
	/*index01 我们的故事 选项卡*/
	$("#contenter1>ul>li").click(function(){
		$(this).parent().children("li").removeClass("c1on");
		$(this).addClass("c1on");
		var index = $(this).index();
		$("#c1showBox>div").hide();
		$("#c1showBox>div").eq(index).show();
	});
	
	
	/*index02 我们的故事 选项卡*/
	$("#contenter2>ul>li").click(function(){
		$(this).parent().children("li").removeClass("c2on");
		$(this).addClass("c2on");
		var index = $(this).index();
		$("#c2showBox>div").hide();
		$("#c2showBox>div").eq(index).show();
	});
	
	
	/*index04 选项卡*/
	$("#contenter4>ul>li").click(function(){
		$(this).parent().children("li").removeClass("c4on");
		$(this).addClass("c4on");
		var index = $(this).index();
		$("#c4showBox>div").hide();
		$("#c4showBox>div").eq(index).show();
	})
})