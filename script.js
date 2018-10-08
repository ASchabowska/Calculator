function insert(num){
 document.getElementById("textView").value = document.getElementById("textView").value + num;
}

function equal(){
    let exp = document.getElementById("textView").value;
    if(exp){
       document.getElementById("textView").value = eval(exp); 
    }
}

function clean(){
    document.getElementById("textView").value = "";
}

function percent(){
    let exp = document.getElementById("textView").value; 
    let x = eval(exp);
    document.getElementById("textView").value = 0.01*x;
}