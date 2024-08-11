function dispCartItem(passeditems){
    for(var counter = 0; counter < passeditems.length; counter++ ){
        console.log(`product name is ${passeditems[counter].name} price is ${passeditems[counter].price}`);
    }
}

const cartItems = new Array()

cartItems.push({
    name : "book",
    price : 450,
    description : "chess book"
})

cartItems.push({
    name : "bedsheet",
    price : 199,
    description : "White bedsheet"
})

cartItems.push({
    name : "iPhone 12 mini",
    price : 45000,
    description : "blue color mobile phone"
})

dispCartItem(cartItems)