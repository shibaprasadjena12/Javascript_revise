// we will see the use of foreach loop and we will also verify if we can useit in map and objects and array

const myA = ["India", "USA", "China", "UK", "France", "Rusia"]

myA.forEach((key) => {
    console.log(key);
} )

function foreach_test(k1){
    console.log(k1);
}

console.log("passing a function as an argument of foreach");

myA.forEach(foreach_test)

// lets see if we can use foreach in object

const myO = {
    name: "jeena",
    village: "kpt",
    school: "kjg school",
    age: 21
}

// myO.forEach((key) => {
//     console.log(key);    // forEach is not a function of object type
// })

// lets see if we can use for each in maps

const myM = new Map()

myM.set("p_name", "laptop")
myM.set("p_brand", "HP")
myM.set("p_color", "Blue")
myM.set("p_price", 30000)

myM.forEach((key) => {
    console.log(key);
})