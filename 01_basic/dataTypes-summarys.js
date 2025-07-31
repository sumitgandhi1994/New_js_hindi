//  primitive

// 7 type of awalible in js = String, Number, Boolean, null, undefined, symbol, bigint

// Note: provide a copy elements and if we change into copy ele they changes show only in copy ele not the main elements.

// and non primitve or refrence type
// 3 types = Array, Object, Function
// Note: giving a refrence of element or variable where any one refrece is update then it'll update in main ele or vriable after that all refrece will show the new value

// Primitive

//7 types : String, number, boolean, null , undefined, symbol, bigInt

const score = 100
const scoreValue = 100.03
const isLoggedIn = false
const outSideTemp = null
let userEmail



// Reference (Non primitive)

//Array, Object, Fuctions

const id = Symbol('123')
const anotherid = Symbol('123')

// console.log(id === anotherid);

const binNum = 464414684894698969698n

// console.log(binNum);


const heros = ['shaktiman', 'naagraj', 'doga'];

const myObj = {
    name :'sumit',
    age : 30
}

const myFun = function(){
    // console.log("Hello world");
    
}

// console.log(typeof outSideTemp)

// stack (primitive) Heap (non-primitive) mamory use krte h 

let uname = "abc"

let  newName = uname
newName = 'xyz'
console.log(uname);
console.log(newName);


let uone = {
    email: 'one@gmail.com'
}

let utow = uone
utow.email = "two@gmail.com"
console.log(uone);
console.log(utow);
