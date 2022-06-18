const arr = [0, 1, 2, 3, 4]

//FILTER
const r = arr.filter(x => x > 3)
console.log(r)


//FILTER
const r2 = arr.filter((x,i) => {
    console.log("index : "+ i)
    return x > 2;
})
console.log(r2)

//MAP
const mapped = arr.map(el => el * 2)
console.log(mapped)

//MAP
const mapped2 = arr.map(el => `<h1>${el}<h1>`)
console.log(mapped2)

//MAP
const users = [
    {id: 1, name: 'Happy pig'},
    {id: 2, name: 'Sad pig'},
    {id: 3, name: 'Tired pig'},
    {id: 4, name: 'Miguel pig'}
]
const mapped3 = users.map(user => `<h1>${user.name}<h1>`)
console.log(mapped3)

//REDUCE
const r1 = arr.reduce( (acc, el) => acc + el, 0)
console.log(r1)

//REDUCE
const arr2 = [-1, -2, -3, -4]
const getMax = (a, b) => Math.max(a, b)
const r3 = arr2.reduce( getMax )
console.log(r3)

//REDUCE
const r4 = users.reduce( (acc, el) => `${acc === '' ? '' : `${acc}, `} ${el.name}`, '')
console.log(r4)

//REDUCE
const r5 = users.reduce( (acc,el) => {
    if(el.id < 2)
        return acc;
    else
        return acc.concat(el)
} ,[])
console.log(r5)

//FILTER
const r6 = users.filter( x => x.id >= 2)
console.log(r6)