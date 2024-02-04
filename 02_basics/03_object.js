// object 

// obejct litreals

const JSuser = {
    name : "javascript",
    age : 15,
    loc : "pune",
    email : "JS17@gmail.com",
}
//console.log(JSuser.email);
//console.log(JSuser.name);
//console.log(JSuser);

JSuser.loc="mumbai" // update the value
//console.log(JSuser);

// symbol 
const mySym = Symbol("key1")
const obj1 = {
    [mySym] : "key1"
}
//console.log(obj1);


// fucntion 
JSuser.greeting = function(){
    console.log("hello Js user");
}
console.log(JSuser.greeting());

// this fucntion 
JSuser.greetingtwo = function(){
    console.log(`hello Js user,${this.name}`);
}
console.log(JSuser.greetingtwo());