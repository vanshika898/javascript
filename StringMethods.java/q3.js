let message = 'i love to code daily';
let vowels = 'aeiouAEIOU';

for(let char of message){
    if(vowels.includes(char)){
        console.log(`${char} is vowel`);
    }
}