var a1 = [2,3,4,5,6]
const a2 = []
for (var counter = 0; counter < a1.length; counter++)
{
    if(a1[counter] === 4)
    {
        continue
    }
    a2.push(a1[counter])
    
}

a1 = a2
console.log(a1);

a2.push(45)

console.log(a1);

