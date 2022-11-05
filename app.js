let i = 0;

function textColor(){
    if(i<0){
        document.getElementById("counter").style.color = "red";
    }else if(i>0){
        document.getElementById("counter").style.color = "green";
    }else{
        document.getElementById("counter").style.color = "midnightblue";
    }
}

    

function decrease(){
    i--;
    document.getElementById("counter").innerHTML = i;
    textColor();
}

function reset(){
    i = 0;
    document.getElementById("counter").innerHTML = i;
    textColor();
}

function increase(){
    i++;
    document.getElementById("counter").innerHTML = i;
    textColor();
}