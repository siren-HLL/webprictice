(function($){
	//技术观：采用成熟技术，做有效集成
    $.extend({
        "hello":function () {
            alert("hello");
			//类级自定义插件 $.hello
        },
        "hello1":function () {
            alert("hello1");
        }
    })
    $.fn.mytext = function () {
        alert($(this).text());//对象级自定义插件
        return $(this);//实现链式编程方便扩展
    }

    $.fn.changeText = function (text) {
        $(this).text(text);
        return $(this);
    }
})(jQuery)

