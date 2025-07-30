const   vanshika =     function (){
    console.log("Hiii , my name is vanshika!!")
}

const  Nigam = function (){
    console.log("my surname is nigam");
}


function birthDay(first,second){
   console.log("methhod borthday called");
   first();
   second();
}

birthDay(vanshika,Nigam);