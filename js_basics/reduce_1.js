const mya1 = [
    {
        name: "jeena",
        class: 3,
        mark: 80,
        subject: "History"
    },
    {
        name: "jeena",
        class: 3,
        mark: 55,
        subject: "Science"
    },
    {
        name: "chiku",
        class: 3,
        mark: 45,
        subject: "Science"
    },
    {
        name: "jeena",
        class: 3,
        mark: 30,
        subject: "Math"
    },
    {
        name: "chiku",
        class: 3,
        mark: 30,
        subject: "Math"
    }
]

const totmark = mya1.reduce( (accum, curval) => {
    if (curval.name === "jeena")
        accum = accum + curval.mark
        return accum;
} , 0)

console.log(totmark);

const mya2 = [10,20,30,40,50,60,70,80,90]

const total = mya2.reduce( (accum, curval) => accum = accum + curval,0)

console.log(total);