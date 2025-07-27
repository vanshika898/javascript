function calculatePower(power){
    return function(number){
     return Math.pow(number,power);
    }
}

const square = calculatePower(2);
const cube = calculatePower(3);

console.log(square(2));
console.log(cube(2));