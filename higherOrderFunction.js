//for each in array

const myArr = ["chiku", "pinku","jeena","lona"]


// Method 1
myArr.forEach(function (myval){
    console.log(`name is ${myval}`);
})

// Method 2 using array function

myArr.forEach((myval2) => {
    console.log(`display using array function ${myval2}`);
})

// Access item, index and whole array

myArr.forEach((item, idx, fullArr) => {
    console.log(item, idx, fullArr);
})

// pass a function reference in for each

// we have a function 
function aFunction(name){
    console.log(name);
}

// we can pass this function to for each of an array

myArr.forEach(aFunction)
