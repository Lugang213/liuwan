window.onload = function(){
	var wrap = document.getElementById('wrap');
	var con = document.getElementById('con');
	var img = con.querySelectorAll('img');
	var lt = document.getElementById('lt');
	var gt = document.getElementById('gt');
	var sl = 0;
	var img4 = img[0].offsetWidth*4;
	var time = null,time2 = null;
	var x ;
	ml();
	//点击向左走
	lt.onclick = function(){
		x = 0;
		clearInterval(time2);
		ml();	
	}
	//点击向右走
	gt.onclick = function(){
		x = 1;
		clearInterval(time);
		mr();
	}
	//定义向左移动的函数
	function ml(){
		clearInterval(time);
		time = setInterval(function(){
			sl++;
			//临界值的判断
			if(sl>=img4){
				sl = 0;
			}
			wrap.scrollLeft = sl;
		},10);
	}
	//定义向右移动的函数
	function mr(){
		clearInterval(time2);
		time2 = setInterval(function(){
			sl--;
				//临界值的判断，
			if(sl<=0){
					sl = img4;
				}
				wrap.scrollLeft = sl;
				
			},10);
	}
		
	//鼠标移入移出
	wrap.onmouseover = function(){
		clearInterval(time);
		clearInterval(time2);
	}
	wrap.onmouseout = function(){
		if(x==0){
			ml();
		}else{
			mr();
		}
	}
	//标准间详介
	var sr = document.getElementById('sr');
	var sr_no = document.getElementById('sr_no');
	sr.onclick = function(){
		sr_no.style.display = "block";
	}
	sr.onmouseout = function(){
		sr_no.style.display = "none";
	}
	
}

