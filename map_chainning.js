const mya = [11,22,33,44,55,66,77,88,99]

const mya2 = mya.map( (item) => item * 10 )
                .map( (item) => item + 1 )
                .filter( (item) => item > 500 )

console.log(mya2);