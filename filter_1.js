const myNums = [10,20,30,40,50,60]

const filtered_numbers = myNums.filter( (nums) => nums > 30)
console.log(filtered_numbers);
console.log(`filtered numbers are ${filtered_numbers}`);

const filtered_numbers2 = myNums.filter( (nms) => {
    return nms > 30
} )

console.log(filtered_numbers2);