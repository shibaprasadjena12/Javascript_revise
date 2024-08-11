function add_two_numbers(number1, number2 = 9, name ){

    if(typeof(number1) === "number" && typeof(number2) === "number"){
        return `name is ${name} result is ${number1 + number2}`
    }
    else {
        return "enter two number only"
    }
}

console.log(add_two_numbers(6, 8, "pinku"))