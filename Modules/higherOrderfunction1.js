function greetMessage(){
    return function(){
         console.log("Hello from the inner function");
    }
}

const output = greetMessage();
output();