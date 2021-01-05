function validate() {
	var x=document.forms["myForm"]["fname"].value;
	var y=document.forms["myForm"]["fpassword"].value;
	if(x==null || x==""){
		alert("请输入用户名！");
		return false;
	}
	else if(y==null||y==""){
		alert("请输入密码！");
		return false;
	}
	else{
		alert("验证成功！\n正在自动跳转中！");
		var Timer;
		Timer=setTimeout(check,3000);
		return false;
	}
	function check(){
		window.location="网页设计.html";	
	}
}