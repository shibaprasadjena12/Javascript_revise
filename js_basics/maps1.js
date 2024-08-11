const map = new Map()
map.set("name","chiku")
map.set("age",18)
map.set("location","India")

console.log(map)

for (const key of map) {
    console.log(key);
}

for (const [key, val] of map) {
    console.log(`${key} ${val}`);
}

// Object in js is not iteratable through for of loop
