// we will see in this program how for in works

const myA = [12,13,25,44,76,87]

for (const key in myA){
    console.log(key);
}

const myM = new Map()

myM.set("product","iphone")
myM.set("Model","15 pro max")
myM.set("color","Red")
myM.set("price", 200000)

for (const key in myM){
    console.log(key);       // it will not return anything
}

const myO = {
    name: "Chiku",
    age: 24,
    address: "Jagatsinghpur, Odisha"
}

for (const key in myO){
    console.log(myO[key]);
}