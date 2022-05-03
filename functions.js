//All functions created using the reserved word 'function' can be a function or a class (prototype based)
function Fn(){
    return 'happy coding!'
}

const result = Fn();
console.log(result)

function Fn2(){
    this.prop = 'property'
}
Fn2.prototype.lala = function FunctionSample(){}

const result2 = new Fn2();
console.log(result2)
console.log(result2.__proto__)

//fat arrow function - doesn't have 'this' context
const fatFn = () =>{
    return "happy coding 2!!"
}
const result3 = fatFn()
console.log(result3)

//fat arrow function - implicit return
const fatFn2 = () => 2
console.log(fatFn2())
