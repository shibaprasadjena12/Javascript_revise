const myA = new Array()

myA.push(10)
myA.push(20)
myA.push(45)
myA.push(63)
myA.push(87)

console.log(myA);

for (const key of myA) {
    console.log(key);
}

const myO = {
    name: "Shirt",
    price: 200,
    color: "red"
}

// for (const key of myO){
//     console.log(key);       //will throw error because Object is not iterable in for of loop
// }

const myM = new Map()

myM.set("name","jeena")
myM.set("age", 21)
myM.set("Address","Odisha")

for (const [key, val] of myM){
    console.log(`${key} is ${val}`);       // Map is iterable in for of
}
