let message = "I am learning JavaScript";
// for (let i = 0; i < message.length; i++) {
//     console.log(message[i]);
// }


// for (let i = 0; i < message.length; i++) {
//     if (message[i] === 'n') {
//         break;
//     }
//     console.log(message[i]);
// }

// let count = 0;

// for (let i = 0; i < message.length; i++) {
//     if (message[i] === 'a') {
//         count++;
//     }
// }

// console.log("The character 'a' appears " + count + " times.");



for (let char of message) {
    console.log(char);
}
let vowels = '';
const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

for (let char of message) {
    if (vowelSet.has(char)) {
        vowels += char;
    }
}

console.log(vowels);