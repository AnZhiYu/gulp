requirejs.config({
	paths : {
		"jquery":"jquery-1.11.1.min",
		"vd" : "validate"
	}
})

requirejs(["jquery","vd"],function($,vd){
	//查找页面元素
	$("form").submit(function(){
		//验证用户名 
		if( !vd.checkName( $("#uname").val() ) ){ //如果用户名不符合规范
			alert("用户名不符合规范");
			return false;
		}
		//验证密码
		if( !vd.checkPwd( $("#upwd").val() ) ){
			alert("密码不合法");
			return false;
		}
		
		
		return true;
	})
 
})
