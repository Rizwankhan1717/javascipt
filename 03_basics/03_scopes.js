// local & global scope {}
let a = 300 
if(true){
    let a = 10 
    //console.log("local scope ",a);
}
//console.log("this is global Scope " ,a);


// nested Scope 

function one(){
    const username = "learning javaScript"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);   ( this is not accessable coz its out of scope)
    two()
}
//one()


// scope - if else 
if(true){
    const username ="javaScript"
    if(username === "javaScript"){
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);           // (not accessable coz its under the scope and we are not)
    //console.log(username);
}

// hoisting with simple example 
console.log(addone(5))
function addone(num){              
    return num +1 
}

// if we hold function in variable we  Cannot access before initialization
console.log(addtwo(5));           // ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function(num){
    return num + 2 
}
