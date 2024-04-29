const myObj = {
    name: "phone",
    price: 98000.00,
    color: "Red"
}

for (const key in myObj) {
    console.log(key);
}

for (const key in myObj) {
    console.log(`${key} of the product is ${myObj[key]}`);
}