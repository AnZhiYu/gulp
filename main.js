//引入外部的js文件   并重命名
requirejs.config({
	paths : {
		"jquery" : "jquery-1.11.1.min",
		"eq" : "isequal"
	}
})

//调用引入的文件中的方法 [依赖的模块]   第二个参数 ：回调函数
requirejs(["jquery","eq"],function($,obj){
	$("body").css("background","pink");
	//比较两个数是否相等
	alert( obj.add(3,4) );
})
