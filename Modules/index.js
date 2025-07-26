// const {print,greet} = require("./utils"); // common js
import {greet,print} from './utils.js';


const isReuiredMath = true;
if(isReuiredMath){
    const {add} = await import ('./math.js');
    console.log(add(2,3));
}
print("any");
greet("vanshika");