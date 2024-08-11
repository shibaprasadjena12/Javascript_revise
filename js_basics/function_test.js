const product_1 = {
    product_name : "T-shirt",
    product_price: 899,
    product_color : "red"
}

const product_2 = {
    p1name : "mobile",
    p1price: 9999,
    p1color : "blue"
}

function disp_product(anyobject) {
    if(Object.keys(anyobject)[0] === "product_name"){
    console.log(`product name is ${anyobject.product_name} product price is ${anyobject.product_price}`);
    }
    else {
    console.log(`product name is ${anyobject.p1name} product price is ${anyobject.p1price}`);
}

}
disp_product(product_1)
disp_product(product_2)