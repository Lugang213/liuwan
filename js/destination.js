window.onload = function(){
	// 台北推荐
	var tbCity = document.getElementById('tb_city');
	var citys = tbCity.children;
	for(var i=0, len = citys.length;i<len;i++){
		citys[i].onclick = function(){
			for(var j=0;j<citys.length;j++){
				citys[j].className = '';
			}
			this.className = 'city-bg';
		}
	}
	//点击喜欢
	var like = document.getElementById('tb-like');
	like.onclick = function(){
		like.src = 'images/xin_03.png';
	}
	//台北攻略 大小图切换
	var maxImg = document.getElementById('max-img');
	var minImg = document.getElementById('min-img');
	var imgs = minImg.querySelectorAll('img');
	console.log(imgs[0].src)
	for(var i=0,len=imgs.length;i<len;i++){
		imgs[i].onclick = function(){
			console.log(this.src)
			for(var j=0;j<imgs.length;j++){
				maxImg.src = '';
			}
			maxImg.src = this.src;
		}
	}

}
	