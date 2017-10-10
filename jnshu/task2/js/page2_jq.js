$(document).ready(function () {

    //监听input输入框改变
    $("#input").change('input',function(e){
        console.log("Changed");
        var  number = check($("#input").val());
        var  n =assign(number);
        display(number,n);
    });
    //监听button点击事件
    $('#button').click(function(){
            var  number = check($("#input").val());
            var  n =assign(number);
            var data = shuffel(number);
            var strArr = [];
            for(let i=0;i<data.length;i++){
                if(data[i]===0){
                    strArr.push((i+1)+'号是平民');
                }else{
                    strArr.push((i+1)+'号是杀手')
                }

            }
            confirm('请查看：\n'+strArr);
        });


    });

//检查输入值
    function check(str){
        var n =parseInt(str);
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
    //随机分配杀手人数
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
    //数组随机
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



