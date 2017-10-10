'use strict';
var twrinkle={
	divs:[],
	colors:[],
	status:false,
	button1: window.document.getElementById("but1"),
	button2: window.document.getElementById("but2"),

	getColors:function(){
		let color;
		for(let i=0;i<3;i++){
			let random = this.getRandom();
			
			switch(random){
				case 1: color = 'red';break;
				case 2: color = 'yellow';break;
				case 3: color = 'blue';break;
				case 4: color = 'green';break;
				case 5: color = '#00ffee';break;
				case 6: color = '#ffeeaa';break;
				case 7: color = '#eeff66';break;
				case 8: color = '#99ffee';break;
				case 9: color = '#557788';break;
				default :color = 'green';break;
			}
			this.colors[i] = color;
		}
	},
	getDivs:function(){
		let divs = [];
		do{
			divs[0]=this.getRandom();
			divs[1]=this.getRandom();
			divs[2]=this.getRandom();
			if(divs[0]!=divs[1]&&divs[0]!=divs[2]&&divs[1]!=divs[2]){
				for(let j=0;j<3;j++){
					switch(divs[j]){
						case 1 : this.divs[j] = document.getElementById('div1');break;
						case 2 : this.divs[j] = document.getElementById('div2');break;
						case 3 : this.divs[j] = document.getElementById('div3');break;
						case 4 : this.divs[j] = document.getElementById('div4');break;
						case 5 : this.divs[j] = document.getElementById('div5');break;
						case 6 : this.divs[j] = document.getElementById('div6');break;
						case 7 : this.divs[j] = document.getElementById('div7');break;
						case 8 : this.divs[j] = document.getElementById('div8');break;
						case 9 : this.divs[j] = document.getElementById('div9');break;
					}
					
				}
				break;
			}
		}while(true);
		return 0;
	},

	getRandom:function(){
		let ran = 9*(Math.random())+1;
		return Math.floor(ran);
	},

	start:function(){
		var that = this
		function transform(){
				that.getColors();
				that.getDivs();
				for(let i=0;i<3;i++){
					that.divs[i].style.backgroundColor=that.colors[i];
				}
			}

		if(!(this.status)){
			setInterval(transform(),1000);
				document.getElementById('but2').style.backgroundColor='orange';
				document.getElementById('but1').style.backgroundColor='#00ffff';
		}
	},

	stop:function(){
		if(this.status){
			this.status = false;
			document.getElementById('but1').style.backgroundColor='orange';
			document.getElementById('but2').style.backgroundColor='#00ffff';
		}
	}
	
}
window.onload =function(){
	//console.log(twrinkle.getRandom());
	//console.log(twrinkle.getColors());
	//console.log(twrinkle.colors);
	//console.log(twrinkle.getDivs());
	//console.log(twrinkle.divs);
	//console.log(but1);
	//console.log(but2);
	twrinkle.button1.onclick=twrinkle.start;
	twrinkle.button1.onclick=twrinkle.start;
	console.log(twrinkle.button1);
};