const books = [
    {title: "C Programming", genere: "Programming", publish: 1996, edition: 2015},
    {title: "Java Programming", genere: "Programming", publish: 1996, edition: 2015},
    {title: "Python Programming", genere: "Programming", publish: 1996, edition: 2015},
    {title: "Two States", genere: "Drama", publish: 2006, edition: 2018},
    {title: "3 Idiots", genere: "Drama", publish: 2004, edition: 2019},
    {title: "Ramayan", genere: "History", publish: "5000BC", edition: 2022},
    {title: "Mahabharat", genere: "History", publish: "5000BC", edition: 2019}
]

const book = books.filter( (bk) => bk.genere === "History" && bk.edition === 2022 )

console.log(book);