// recuration 


// Recursion in functional JavaScript refers to the technique of solving problems by breaking them down into smaller, similar subproblems and solving those subproblems recursively. In functional programming, recursion is a fundamental concept and is often used instead of traditional iterative loops.

// mainly jab ek function ke andar usi function ko call karna 

// examole :

function factorial(n){
    if(n === 0 || n === 1){
        return 1 
    }else{
        return n * factorial(n - 1)
    }
}

console.log(factorial(5));


function fn(fname){
    document.write("Arbaaz");
    // fn2();
}  

function fn2(lname){
    document.write("Chouhan");
    fn();
}

// fn();



function fn(n){
    if(n===0) return 0;
    if(n===1) return 1;
    return fn(n-2) + fn(n-1)
}

console.log(fn(8)); 