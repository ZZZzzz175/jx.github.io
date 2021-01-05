function del() {
var tr = this.parentNode.parentNode;
var name = tr.getElementsByTagName("td")[0].innerHTML;
var flag = confirm("确认要删除" + name + "吗"); //confirm有返回值，确认为true和取消为false

if (flag) //如果点击确认则删除tr
	tr.parentNode.removeChild(tr);
}
window.onload = function() {
var alla = document.getElementsByTagName("a");
//为每一个超链接都绑定一个单击响应事件（遍历）
for (var i = 0; i < alla.length; i++) {
	alla[i].onclick = del;
}

var btn = document.getElementById("addUserButton");
//点击响应事件
btn.onclick = function() {
	//获取用户信息
	var name = document.getElementById("userName").value;
	//获取用户的联系方式
	var email = document.getElementById("email").value;
	//获取用户反馈的内容
	var content = document.getElementById("content").value;

	//需要将获取到的信息保存到tr中
	//创建一个tr
	var tr = document.createElement("tr");
	//设置tr里的内容
	tr.innerHTML = "<td>" + name + "</td>" + "<td>" + email + "</td>" + "<td>" + content + "</td>" +
		"<td><a href='javascript:;'>delete</a></td>";
	//获取tr中的a
	var a = tr.getElementsByTagName("a")[0];
	//绑定单击响应函数
	a.onclick = del;
	//获取table
	var userTb = document.getElementById("userTable");
	//获取tbody
	var tbody = userTb.getElementsByTagName("tbody")[0];
	//将tr添加到table中
	tbody.appendChild(tr);
};
};