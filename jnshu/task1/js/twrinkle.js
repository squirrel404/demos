"use strict";
window.onload=function(){
	var status = false;
//	var colors_arr =['#272727','#EA0000','#820041','#28004D','#0000C6','#00E3E3','#006000','#FF79BC','#8CEA00'];
	var button1 = window.document.getElementById("but1");
	var button2 = window.document.getElementById("but2");
	var content = document.getElementById('content');
	var timer = setInterval(function(){
					if(status){
								changeDivs();
							}
					},1000);

	button1.onclick=start;
	button2.onclick=stop;

//获取随机数
	function getRandom(){
		var ran = 9*(Math.random())+1;
		return Math.floor(ran);
	}
//获取颜色
/*	
//颜色随机范围太小，换用rgb形式
	function getColors(){
		var ran=[];
		var color=[];
		do{
			ran[0]=getRandom();
			ran[1]=getRandom();
			ran[2]=getRandom();
			if(ran[0]!=ran[1]&&ran[0]!=ran[2]&&ran[1]!=ran[2]){
				for(let i=0;i<3;i++){
					color[i] = colors_arr[ran[i]-1];
				}
				break;
			}
		}while(true);
		return color;
	}

*/
//随机获取颜色
	function getColors(){
		var color=[];
		do{
			for(let i=0;i<3;i++){
					var r = Math.floor((Math.random())*255);
					var g = Math.floor((Math.random())*255);
					var b = Math.floor((Math.random())*255);
					color[i] = 'rgb('+r+','+g+','+b+')';
			}
			if(color[0]!=color[1]&&color[0]!=color[2]&&color[1]!=color[2]){
				break;
			}
		}while(true);
		return color;		
	}

	//获取格子，并改变样式
	function changeDivs(){
		var ran = [];
		var colors = getColors();
		do{
			ran[0]=getRandom();
			ran[1]=getRandom();
			ran[2]=getRandom();
			if(ran[0]!=ran[1]&&ran[0]!=ran[2]&&ran[1]!=ran[2]){
				for(let j=1;j<10;j++){
					if(j===ran[0]){
						content.children[j-1].style.backgroundColor=colors[0];
					}else if(j===ran[1]){
						content.children[j-1].style.backgroundColor=colors[1];
					}else if(j===ran[2]){
						content.children[j-1].style.backgroundColor=colors[2];
					}else{
						content.children[j-1].style.backgroundColor='orange';
					}		

				}
				break;
			}
		}while(true);
	}
//开始按钮
	function start(){
		if(!(status)){
				status = true;
				button2.style.backgroundColor='orange';
				button1.style.backgroundColor='#eeeeee';
		}
	}
//结束按钮	
	function stop(){
		if(status){
			status = false;
			button1.style.backgroundColor='orange';
			button2.style.backgroundColor='#eeeeee';
			for(let i=0;i<9;i++){
				content.children[i].style.backgroundColor='orange';
			}
		}
	}

};