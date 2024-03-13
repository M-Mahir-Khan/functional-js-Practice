// Pure Function

// Function that always return the same result for the same inputs and have no side effects

// example : 

function add(x,y){
    return x + y;
}

console.log(add(2,3)); // output 5


// Impure function 

//  an impure function in javascript regers to a function that can cause side effects or does't return the same result for the same input s and have no side effects

// An "impure function" in JavaScript refers to a function that can cause side effects or modify external state in addition to producing a return value. Unlike pure functions, impure functions may interact with variables outside their scope, modify global variables, perform I/O operations, or have other observable effects beyond returning a value based solely on their inputs.


// example : 

let total = 0;

function addtotal(value){
    total += value;
    console.log(`Total is now ${total}`);
}
addtotal(2)


