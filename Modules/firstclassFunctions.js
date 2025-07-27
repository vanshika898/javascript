

// comments
// In JavaScript, functions are treated as "first-class citizens." 
// But what does this mean? It means that functions in JavaScrip
//  have the same status as other data types like strings, numbers, or objects. 
// Functions can be:

// Assigned to variables
// Passed as arguments to other functions
// Returned from other functions


// 1. Assigning a Function to a Variable
const greet  = function (wrapper,name){
    const message = wrapper();
    console.log(`hii , ${name}!!! ${message}`);
}

// greet();
// 2. Passing a Function as an Argument to Another Function
function  wrapperFuction(){
    return "Welocme  geeksforgeeks";
}
greet(wrapperFuction,"vanshika");