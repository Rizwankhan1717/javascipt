//1
function SaymyName (){
    console.log("hello ! i am batman");
}
//SaymyName()

//2
function addTwoNumbers(num1,num2){
    console.log(num1 + num2);
}
//addTwoNumbers(5,7)


//3 return method 
function  addnumber(num1,num2){
    //let result = num1 + numb2
    //return result             
    return num1 + num2          // another way 
}
const result = addnumber(5,6)
//console.log("ans : ", result);  // return always store in diff var


//4 
function LoginUsermessage(Username){
    if(!Username){                                  // (Username === undefined)
        console.log("please enter a username");
        return
    }
    return `${Username} just logged in`
}
console.log(LoginUsermessage("javaScript"));
console.log(LoginUsermessage());




