function  squareroot(power){
    return function (number){
     return Math.pow(number,power);
    }
}

const a = squareroot(2);
console.log(a(4));