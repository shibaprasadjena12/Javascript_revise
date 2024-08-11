const mp = [30,40,50,60]

console.log( mp.map( (item) => item * 10 ).filter( (item) => item >= 500 ));

// reduce

const res = mp.reduce( (accum, curval) => (accum = curval + accum), 0 )

console.log(res);