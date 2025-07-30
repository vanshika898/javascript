function calculateTotal(a,b){
    return a+b;
}

const a = calculateTotal(1,2,3,4);
console.log(a);


function calculate(a,b){
    console.log(arguments);
}

calculate(1,2,3,5);

function cal (a,b){
    arguments[0]=4;
    console.log(arguments);
}

cal(1,2,3,4,5,7);
