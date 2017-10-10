function recover() {
    var ran = [];
    ran[0] = Math.floor((Math.random()*9)+1);
    ran[1] = Math.floor((Math.random()*9)+1);
    ran[2] = Math.floor((Math.random()*9)+1);

    var color = function(){
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        return "rgb("+r+","+g+","+b+")";
    }


    for(var i=1;i<=9;i++){
        if(i===ran[0]||i===ran[1]||i===ran[2]){
            document.getElementById(i).style.backgroundColor=color();
        }else{
            document.getElementById(i).style.backgroundColor='orange';
        }
    }
}
function colors() {
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+","+g+","+b+")";
}
function gz() {
    recover();
    for(var i=0;i<1;i--){
        var   x=Math.floor((Math.random()*9)+1);
        var   y=Math.floor((Math.random()*9)+1);
        var   z=Math.floor((Math.random()*9)+1);
        if(x!=y&&x!=z&&y!=z)
        {
            break;
        }
    }

    document.getElementById(x).style.backgroundColor=colors();
    document.getElementById(y).style.backgroundColor=colors();
    document.getElementById(z).style.backgroundColor=colors();
}
var time;
function XH() {
    time=setInterval(gz,1000);
}
var a=1;
function start() {
    if (a==1){
        XH();
        a=2;
    }
}
function stop() {
     a=1;
    clearInterval(time);
    recover();
}