window.onload=function(){
	var Username=document.getElementById('username');
	var Userpass=document.getElementById('userpass');
	var Login=document.getElementById('login');
	var Del=document.getElementById('del');
	if(getCookie('username')){
		Username.value=getCookie('username');
	}
	if(getCookie('userpass')){
		Userpass.value=getCookie('userpass');
	}
	Login.onclick=function() {
		//alert('登陆成功');
		setCookie('username',Username.value,5);
		setCookie('userpass',Userpass.value,5);
	}
	Del.onclick=function(){
		removeCookie('username');
		removeCookie('userpass');
		Username.value='';
		Userpass.value='';
	}
}

function setCookie(key,value,t){
	var myDate=new Date()
	myDate.setDate(myDate.getDate()+t)
	document.cookie=key+"="+value+ ";expires="+myDate.toGMTString();
}

function getCookie(key){
	var arr1=document.cookie.split('; ');
	for (var i=0;i<arr1.length;i++){
		var arr2=arr1[i].split('=');
		if(arr2[0]==key) {
			return decodeURI(arr2[1]);
		}
	}
}

function removeCookie(key){
	setCookie(key,'',-1);
}