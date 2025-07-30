function calculatePower(wrapper,number){
  const tempArr = [];
  for(let number of tempArr){
    tempArr.push(wrapper(number));
  }
  return tempArr;
}


function square(number){
    return number ** 2;
}

const arr = [1,3,3,4];
const a = calculatePower(square, arr);
console.log(a);
