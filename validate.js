define(function(){
	return {
		checkName : function(sname){
			var reg = /^\w{3,8}$/;
			if( reg.test(sname) ){
				return true;
			}else{
				return false;
			}
		},
		checkPwd : function(spwd){
			var reg = /^.{6,}$/;
			if( reg.test(spwd) ){
				return true;
			}else{
				return false;
			}
		}
	};
})
