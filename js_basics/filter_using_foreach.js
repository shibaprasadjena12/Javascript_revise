const mya1 = [2,4,5,3,2,5,6,8,44,33,34,6,]

const mya2 = []

mya1.forEach( (num1) => {
    if(num1 > 6){
        mya2.push(num1)
    }
} )

console.log(mya2);