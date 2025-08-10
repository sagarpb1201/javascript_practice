console.log(testVar) //this will be undefined as it will be hoisted and set to undefined
console.log(testLet) //this will throw error that it can't be accessed before initialization

declaredFunc() //this will be able to execute the function as the whole functin is hoisted
expressedFunc() //this will throw error taht it can't be accessed before initialization

var testVar='I am a var';
let testLet='I am a let';
function declaredFunc(){}
const expressedFunc=()=>{}

console.log(testVar) //prints I am a var
console.log(testLet) //prints I am a let