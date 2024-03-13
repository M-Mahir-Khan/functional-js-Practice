// Higher Order Function 


// In functional JavaScript, HOF stands for Higher-Order Function. A Higher-Order Function is a function that either:

// Takes one or more functions as arguments (i.e., functions as parameters).
// Returns a function as its result.

// Higher-Order Functions are a fundamental concept in functional programming and enable powerful abstractions and composition techniques. They allow you to encapsulate and abstract patterns in your code, promoting modularity, reusability, and maintainability.

// example:

function createMultiplier(multiplier){
    return function (number){
        return number * multiplier
    }
};

// using the HOF
const double = createMultiplier(2)
console.log(double(5));  // Output 10 



// custom map method

let data = [1,2,3,4,10]

Array.prototype.customMap = function(x){
    const result = []
    for(let i = 0; i< this.length; i++){
        result.push(x(this[i]))
    }
    return result
}


function multiplyby2(item){
    return item * 2
}

let outpt = data.customMap(multiplyby2)
console.log(outpt);


function add(number,fn){
return fn(number);
}

function addition(x){
    return x * x
}

function addition2(y){
    return y * 3
}

console.log(add(5,addition));
console.log(add(5,addition2));




// Itration means that access all items of an array 

const arr = [1,2,3,4,5]

const add2 = arr.map(e => e + 2)
console.log(arr);



// imt me data seve rhata  hai  and badme  value be add kar sakte hai
const arr1  = [1,2,3,4,5,6,7,8];
const res = [...arr1,9];
console.log(res);

