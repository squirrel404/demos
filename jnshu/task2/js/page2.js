window.onload=function(){
    var btn = document.getElementById('button');
    var   input = document.getElementById('input');


    btn.onclick=function(){
        var     v = input.value;
        var   number = check(v);
        console.log(number);
        var data = shuffel(number);
        console.log(data);
        confirm('1是杀手,0是平民\n'+data);
    }


}

//输入框默认值



function check(str){
    var n =parseInt(str);
    console.log(n);
    if(str === ''){
        alert("请输入正确的玩家数量");
        return false;
    }else if(isNaN(n)){
        alert("请输入正确的玩家数量");
        return false;
    }else if(n>=4&&n<=18){
        return n;
    }else{
        alert("请输入正确的玩家数量");
        return false;
    }

}
function assign(number) {
    if (number) {
        if (number <= 5) {
            return 1;
        } else if (number >= 6 && number <= 8) {
            return 2;
        } else if (number >= 9 && number <= 11) {
            return 3;
        } else if (number >= 12 && number <= 15) {
            return 4;
        } else {
            return 5;
        }
    }
}
function display(number,n){
    var sp1 = document.getElementById('sha');
    var sp2 = document.getElementById('ping');
    sp1.innerText=n;
    sp2.innerText = number-n;
}
function shuffel(number){
    var n = assign(number);
    display(number,n);
    var data=[];
    var ran_arr=[];
    for(let i=0;i<n;i++){
        var ran = Math.floor(number*(Math.random())+1);
        ran_arr.push(ran);
    }
    for(let j=0;j<number;j++){
        data[j] = 0;
    }
    for(let k=0;k<ran_arr.length;k++){
        data[ran_arr[k]] = 1;
    }
    return data;
}