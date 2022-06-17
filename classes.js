//class expression
const Triangle = class {

}

//class declaration
class Rectangle{

}

//This works because of hoisting
//Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution
//hoisting doesn't work for classes declaration
console.log(Square);
function Square(){}

console.log(Square, Rectangle);

const r = new Rectangle();

class Pig {
    property = "my property"
    #hungry
    static myStaticVar = 42

    constructor(status = 'happy', hungry = false) {
     this.status = status;
     this.#hungry = hungry
    }

    speak(){
        console.log(`I am ${this.status} ${this.#hungry ? 'and hungry' : 'and not hungry'}`);
    }

    static eat(){
        this.myStaticVar = 100
        console.log(this, 'I am eating')
    }
}

const happyPig = new Pig('happy');
console.log(happyPig)
//console.log(happyPig.__proto__.speak)
happyPig.speak();
const sadPig = new Pig('sad');
//sadPig.speak();
const notsurePig = new Pig();
//notsurePig.speak();
Pig.eat()