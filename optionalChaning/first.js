const obj = {
    name :"vanshika",
    age : 21,
    // address: {
    //  city : "Ujjain",
    //  State  : "Madhya Pradesh",
    //  country : "India"
    // }
    greet:function(){
        console.log("function called");
    }

}
console.log(obj.name);
console.log(obj.address?.State)
obj.greet();
obj.gh?.();