// IF ELSE

const name = "Rituparna"
const hasMoney = true
const creditmoney = 2000

if(name) {
    console.log(name);
}
else{
    console.log("enter name")
}

if(name === "jeena" || name === "Ritu" || name === "Rituparna"){
    console.log(`hi ${name}, you are chiku's girlfriend`);
}

if((name === "jeena" || name === "Ritu" || name === "Rituparna") && !hasMoney){
    console.log(`Your account has been credited with ${creditmoney}`);
}

if(name) console.log(`welcome ${name}`), console.log("Chiku loves you a lot");

const age = null ?? 19

console.log(age)

const myage = undefined ?? 19

console.log(myage);

const yourage = 20 ?? 19

console.log(yourage)

name ? console.log("name entered") : console.log("name null");