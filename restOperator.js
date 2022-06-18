const res = (a, ...args) => {
    console.log(a);
    console.log(args);
}
res(1, 2, 3);

const obj = {
    a: 1, b: 2, c: 3, d: 4
}

//Destructuring assignment
const { a, b, ...restobj } = obj
console.log(a, b, restobj);


//Destructuring assignment
const arr = [1, 2, 3, 4, 5]
const [d, e, ...f] = arr
console.log(d, e, f)


//Destructuring assignment
const useState = () => ['valor', () => {}]
const [valor, setValor] = useState()
console.log(valor, setValor())