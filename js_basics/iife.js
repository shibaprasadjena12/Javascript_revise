(() => {console.log("done")})();

(function myfun(name){
    //named iife
    console.log(`my name is ${name}`)
})("chiku");

((age) => {console.log(`my age is ${age}`);})(18)