// Curirng 

// Curring ek technique hai jo functional programming mein istemal hoti hai, jismein ek function ko multiple arguments ke bajaye ek argument ke saath ek sath invoke kiya jata hai. Is process mein, agar function ko kam arguments ke sath call kiya jata hai, to ye ek naya function return karta hai jo baaki arguments ko expect karta hai.

// EXAMPLE 1)

function add(x, y){
    return x + y;
}

// cuurid vereson 

function addCurried(x){
    return function(y){
        return x + y;
    }
}

// usage 

 const add2 = addCurried(2)
 console.log(add2(3));  // outpt 5 

// EXAMPLW 2)

function calculateArea(width,height){
    return width * height
}

// curied verson

function calculateAreacurried(width){
    return function(height){
        return width * height
    }
}

const areaWithWidth5 = calculateAreacurried(5)
console.log(areaWithWidth5(3));

