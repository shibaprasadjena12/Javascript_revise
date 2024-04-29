// console.log(this);  // this represents current scope

const myglobal = 90

function myfun(){
    let myvar = 10   // block scope
    var myvar2  // function scope
    myvar2 = myvar - 1
    console.log(myvar2);
    console.log(myglobal);
    if(true){
        let myvar3 = 30
        console.log(myvar3)
        console.log(myglobal);
    }

    console.log(myvar3);


}

console.log(myglobal);


myfun()
// console.log(myvar2);
