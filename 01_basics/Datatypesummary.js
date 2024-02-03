// 1.Primitive Types : Number, String, Boolean, Undefined, Null, BigInt, Symbol.

const score = 100
const scoreVlaue = 100.3

const isLoggedIn = false
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// 2.non-Primitive/refrence Types : Array, object, fucntions

const heros = ["ironman", "captain" ,"thor"]

let myobj ={
    name:"iron",
    age : 45,
}

const myFuntion = function(){
    console.log("hello rizz");
}
