const happyAnimals = ['happy cat', 'happy dog', 'happy eagle']
export const sadAnimals = ['sad fish', 'sad shark', 'sad sheep']
const otherAnimals = []

// module.exports = {
//     happyAnimals,
//     sadAnimals
// }

const fn1 = () => {
    console.log('I am function 1')
}
function fn2(){
    console.log('I am function 2')
}

export { otherAnimals, fn1, fn2 }
export default happyAnimals