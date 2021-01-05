window.onload=function tab(tab_t,tab_t_tag,tab_c,tag_c_tag,evt)
{
	var tab_t=document.getElementById('tab_t');
	var tab_t_li=tab_t.getElementsByTagName('li');
	var tab_c=document.getElementById('tab_c');
	var tab_c_li=tab_c.getElementsByTagName('div');
	var len=tab_t_li.length;
	var i=0;
	for(i=0;i<len;i++)
	{
		tab_t_li[i].index=i;
		tab_t_li[i].onclick=function()
		{
			for(i=0;i<len;i++)
			{
				tab_t_li[i].className='';
				tab_c_li[i].className='hide';
			}
			tab_t_li[this.index].className='act';
			tab_c_li[this.index].className='';
		}
	}
}
tab("tab_t","li","tab_c","div","onmouseover");