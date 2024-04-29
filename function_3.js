function cartItems(itemObject){

    console.log(`Item name is ${itemObject.name} and item price is ${itemObject.price}`)

}

const myitem = {
    name : "shirt",
    price : 888,
    color : "green",
    res : function myfun() {
        return 56
    }
}

const myref2 = myitem.res

console.log(myref2);

cartItems({
    name : "shirt",
    price : 888
})

cartItems({
    name : "book",
    price : 666
})