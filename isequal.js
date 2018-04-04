//通过define  方法 定义功能
define(function(){
	//为什么要用return？？
	//为什么要返回一个对象?
	return {
		euqal : function(a,b){
			return a == b;
		},
		add : function(a,b){
			return a + b;
		}
	};
})
