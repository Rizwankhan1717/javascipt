const user = {
    username : "javaScript",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);

    }
}
//user.welcomeMessage()
//user.username = "tony"
//user.welcomeMessage()

//console.log(this);

function test(){
    let username = "javaScirpt"        
    console.log(this.username);     // this working in object not like this 
}
//test()

// arrow function
// 1  
const addtwo = (num1,num2) => {
    return num1 + num2
}
// console.log(addtwo(5,6));

//2 implicit return
// const addnum = (num1,num2) => num1 + num2
// const addnum = (num1,num2) => (num1 + num2)  // another way 
// console.log(addnum(6,2));

//3 return object
const returnobj = () => ({username : "javascript"}) 
console.log(returnobj()); 


