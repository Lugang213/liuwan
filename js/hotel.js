$(function(){
	var x = 1;
	var time = null;
	var anm = true;
	var imgW = $('.cont img').width();
	$('.box').scrollLeft(imgW);
	function move(){
		time = setInterval(function(){
			x ++;
			if(x>=$('.cont img').length-11){
				x=1;
				$('.box').scrollLeft(0);
			}
			$('.box').stop().animate({scrollLeft:imgW*x},2000);
		},5000)
	}
	move();
	$('.lt').click(function(){
		clearInterval(time);
		if(anm){
			anm = false;
			x--;
			if(x<1){
				x = $('.cont img').length-2;
				$('.box').scrollLeft(imgW*(x+1));
			}
			$('.box').stop().animate({scrollLeft:imgW*x},function(){anm = true;});
		}
		move();
	})
	$('.gt').click(function(){
		clearInterval(time);
		if(anm){
			anm = false;
			x ++;
			if(x>=$('.cont img').length-1){
				x=1;
				$('.box').scrollLeft(0);
			}
			$('.box').stop().animate({scrollLeft:imgW*x},function(){anm = true;});	
		}
		move();
	})
	$('.box').hover(function(){
		$('.box').css({cursor:'pointer'})
		clearInterval(time);
	},function(){move()});

	// 酒店选择
	var as3 =document.getElementById('as3');
	var radio = document.getElementById('radio');
	var ipts =  radio.children;
	var opt = document.getElementById('option2');
	var as2 = opt.children;
	var option = document.getElementById('option');
	var as = option.children;
	var reset = document.getElementById('reset');
	//地区选择
	for(var i=0, len = as.length;i<len;i++){
		as[i].onclick = function(){
			for(var j=0;j<as.length;j++){
				as[j].className = '';
			}
			this.className = 'show';
		}
	}
	//房型选择
	for(var i=0, len = as2.length;i<len;i++){
		as2[i].onclick = function(){
			for(var j=0;j<as2.length;j++){
				as2[j].style="";	
			}
			this.style.color = '#ffa000';
		}	
	}
	//价格选择
	for(var i=0, len = ipts.length;i<len;i++){
		ipts[i].onclick = function(){
			if(radio.checked){
				as3.style.color = '';
			}
			as3.style.color = '';
		}
	}
	//点击重置清空选择
	function reloadPage(){
 		 location.reload()
	}
	reset.onclick = function(){
		reloadPage();
	}
	// function Choose(Chs,Styles){
	// 	for(var i=0,len = Chs.length;i<len;i++){
	// 		Chs[i].onclick = function(){
	// 			for(var j=0;j<Chs.length;j++){
	// 				Chs[j].className = '';
	// 			}
	// 			this.className = 'Styles';
	// 		}
	// 	}
	// }
	
	// Choose(as,show)
})

