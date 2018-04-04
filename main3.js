requirejs.config({
	paths : {
		"jquery":"jquery-1.11.1.min",
		"vd" : "validate"
	}
})

requirejs(["jquery","vd"],function($,vd){
	//查找页面元素
	$("form").submit(function(){
		
		 if(flagName){
		 	return true;
		 }else{
		 	return false;
		 }
		
	})
	//验证用户名 
	var flagName = null;
 	$("#uname").blur(function(){
		if( !vd.checkName( $("#uname").val() ) ){ //如果用户名不符合规范
			alert("用户名不符合规范");
			flagName = false;
		}else{
			flagName = true;
		}
 	})
})
