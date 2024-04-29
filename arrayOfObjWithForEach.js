// Handeling array of object with for each

const products = [
    {
        name: "iPhone",
        price: 80999,
        color: "green",
        memory: "64GiB"
    },
    {
        name: "Samsung",
        price: 90999,
        color: "gray",
        memory: "512GiB"
    },
    {
        name: "Realme",
        price: 30999,
        color: "yellow",
        memory: "128GiB"
    }
]

products.forEach((product) => {
    console.log(`Price of ${product.name} is ${product.price}`);
})