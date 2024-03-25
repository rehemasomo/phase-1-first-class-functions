// Funtion 1: receivesAFunction 
function receivesAFunction(callback) {
    callback(); //call the callback function
}

//Function 2: returnsANamedFunction function
function returnsANamedFunction() {
    return namedFunction;
}
function namedFunction() {
    //function body
}
//returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
    return function(){

 //Anonymous Function body

    };
}

module.exports={
    receivesAfunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
};
