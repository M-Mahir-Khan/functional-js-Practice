// clorure

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


//  Closures means that na inner function always has access to the variable and perameters of its outer function.



// example :

function init(){
    let name = 'Mozilla';
    function displayName(){
        console.log(name);
    }
    name = "Hello"
    return displayName
}

let c = init()
c()


// example :

function outerfunction(){
    const outervariable = 'I am from outer function'

    function innerfunction(){
        console.log(outervariable);
    }
    return innerfunction;
}

const clorure = outerfunction()
clorure()

// example :
function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(count);
    }
    return increment
}

const counter = createCounter()
counter()
counter()
counter()

