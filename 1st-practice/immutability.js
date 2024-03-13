// Immutability 

// In functional JavaScript, immutability refers to the concept of not changing the state of data once it's created. Instead of modifying existing data structures, you create new ones with the desired changes. This approach helps in writing more predictable and maintainable code because it avoids unintended side effects that can occur when data is mutated directly.

// Example : 

// murtable approch

let muttableArr = [1.2,3]
muttableArr.push(4)
console.log(muttableArr);


// Immtable approch

const immutableArr = [1,2,3]
const newArr = [...immutableArr,5]
console.log(immutableArr);
console.log(newArr);



// Example :

const bankAccountDetails = {
    bankName: 'HDFC',
    balance:100,
    username:'Rohit',
};

function luckyDraw(bankDetails){
    const tempAcc = {...bankDetails}
    tempAcc.balance += 100;
    return tempAcc;
}

const newAccountChanges = luckyDraw(bankAccountDetails)

// console.log(bankAccountDetails);
console.log(newAccountChanges);

function checkProfit(prevDetails,newDetails) {
    return newDetails.balance - prevDetails.balance
}

const profit = checkProfit(bankAccountDetails,newAccountChanges)
console.log(profit);


// exapmle ;

const person = {
    name:'Rohit',
}

function clone(state){
    return{...state}
}

function set(state,key,val){
    const copyState = clone(state)
    copyState[key] = val; 
    return copyState;
}

const newPerson = set(person,'name','MOhit')
console.log(person,newPerson);



// Pure 

// Pure function are the function that always return same output for the same input and have no side effect .

function addition(x,y){
    return x + y
}

addition(2,3)



// impure functon do acuse side effect the functon 
// impure function return same input and differn outpute
const a = 10;
function add(x){
return a * x;
}

console.log(add(10));