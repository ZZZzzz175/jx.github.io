function del() {
var tr = this.parentNode.parentNode;
var name = tr.getElementsByTagName("td")[0].innerHTML;
var flag = confirm("确认要删除" + name + "吗"); //confirm有返回值，确认为true和取消为false

if (flag) //如果点击确认则删除tr
	tr.parentNode.removeChild(tr);
//return false;
}
window.onload = function() {
var alla = document.getElementsByTagName("a");
//为每一个超链接都绑定一个单击响应事件（遍历）
for (var i = 0; i < alla.length; i++) {
	alla[i].onclick = del;
}

var btn = document.getElementById("addEmpButton");
//点击响应事件
btn.onclick = function() {
	//获取用户添加的员工信息（获取员工姓名）
	var name = document.getElementById("empName").value;
	//获取员工的邮箱
	var email = document.getElementById("email").value;
	//获取员工工资
	var salary = document.getElementById("salary").value;

	//需要将获取到的信息保存到tr中
	//创建一个tr
	var tr = document.createElement("tr");
	//设置tr里的内容
	tr.innerHTML = "<td>" + name + "</td>" + "<td>" + email + "</td>" + "<td>" + salary + "</td>" +
		"<td><a href='javascript:;'>delete</a></td>";
	//获取tr中的a
	var a = tr.getElementsByTagName("a")[0];
	//绑定单击响应函数
	a.onclick = del;
	//获取table
	var employeeTb = document.getElementById("employeeTable");
	//获取tbody
	var tbody = employeeTb.getElementsByTagName("tbody")[0];
	//将tr添加到table中
	tbody.appendChild(tr);
};
};