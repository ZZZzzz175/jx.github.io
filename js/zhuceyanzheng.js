function validate(){
	var str=document.forms["myForm"]["fname"].value;
	var code=document.forms["myForm"]["fpassword"].value;
	var code1=document.forms["myForm"]["fpassword1"].value;
	if(str.length<6||str.length>10){
		alert("用户名长度为6--10位！");
		return false;
	}
	else if(str==null||str==""){
		alert("用户名不能为空！");
		return false;
	}
	else if(code.length<6){
		alert("密码过短！");
		return false;
	}
	else if(code != code1){
		alert("两次输入的密码不一致！");
		return false;
	}
	return true;
}