function wrapper(){
    return "my name is vanshika";
}
function greeting(wrapper,name){
    console.log(`${wrapper()} is the nanmeee  ${name}`);
}

greeting(wrapper,"vanshika");